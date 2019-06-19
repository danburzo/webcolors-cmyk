// Libs
import { colorsNamed, formatter, wcagLuminance } from 'culori';
import { useState, useEffect } from 'react';
// import Head from 'next/head';
import NextSeo from 'next-seo';

import Swatch from '../components/Swatch';
import Footer from '../components/Footer.mdx';

import './index.css';

const hex = formatter('hex');
const srgb = Object.keys(colorsNamed)
	.sort()
	.filter(c => !c.match(/grey/i))
	.map(c => ({ name: c, value: hex(c) }));

import profiles from '../data/profiles.json';

const options = [
	...profiles,
	{
		id: 'srgb',
		name: 'sRGB',
		colors: srgb
	}
];

const initialBg = '#f8f5f5';

const meta = {
	title: 'CMYK Named Colors',
	description: 'Named CSS colors, converted to CMYK and back to RGB.',
	openGraph: {
		title: 'CMYK Named Colors',
		description: 'Named CSS colors, converted to CMYK and back to RGB.',
		images: [{ title: '', url: require('../static/webcolors-cmyk.png') }]
	},
	twitter: {
		handle: '@danburzo',
		cardType: 'summary_large_image'
	}
};

const json_url = id =>
	`https://raw.githubusercontent.com/danburzo/webcolors-cmyk/master/data/colors/${id}.json`;
const css_url = id =>
	`https://raw.githubusercontent.com/danburzo/webcolors-cmyk/master/data/colors/${id}.css`;

const Home = () => {
	let [tab, setTab] = useState('srgb');
	let [list, setList] = useState(srgb);
	let [scale, setScale] = useState(10);
	let [bg, setBg] = useState(initialBg);

	let bgIsLight = wcagLuminance(bg) > 0.2;

	// Once JS kicks in, switch to a CMYK profile
	useEffect(() => {
		setTab(options[0].id);
	}, []);

	useEffect(() => {
		let profile = options.find(o => o.id === tab);
		if (profile) {
			if (!profile.colors) {
				import(`../data/colors/${profile.id}.json`).then(module => {
					let colors = module.default.colors;
					profile.colors = colors;
					setList(colors);
				});
			} else {
				setList(profile.colors);
			}
		}
	}, [tab]);

	return (
		<React.Fragment>
			<NextSeo config={meta} />
			<header>
				<h1>
					CSS Named Colors, converted to CMYK and back.{' '}
					<a href="#notes">Why?</a>
				</h1>
			</header>
			<div className="controls">
				<label>
					Color profile:{' '}
					<select
						value={tab}
						autoComplete="off"
						onChange={e => setTab(e.target.value)}
					>
						{options.map(o => (
							<option key={o.id} value={o.id}>
								{o.name}
							</option>
						))}
					</select>
				</label>
				<div>
					<a
						href={tab !== 'srgb' ? json_url(tab) : ''}
						target="_blank"
						rel="noopener"
					>
						&darr; JSON
					</a>{' '}
					/{' '}
					<a
						href={tab !== 'srgb' ? css_url(tab) : ''}
						target="_blank"
						rel="noopener"
					>
						&darr; CSS
					</a>
				</div>
				<label>
					Swatch size:{' '}
					<input
						type="range"
						min="1"
						max="20"
						step="0.5"
						value={scale}
						onChange={e => setScale(e.target.value)}
					/>
				</label>
			</div>
			<article
				className={`${bgIsLight ? 'main--light' : 'main--dark'}`}
				style={{ backgroundColor: bg }}
			>
				<ul className="swatchlist" style={{ '--scale': `${scale}em` }}>
					{list.map(({ name, value }, i) => (
						<Swatch
							color={value}
							key={i}
							name={name}
							compact={scale < 10}
							onClick={e => {
								setBg(value === bg ? initialBg : value);
							}}
						/>
					))}
				</ul>
			</article>
			<footer id="notes">
				<Footer />
			</footer>
		</React.Fragment>
	);
};

export default Home;
