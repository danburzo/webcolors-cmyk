// Libs
import { colorsNamed, formatter, wcagLuminance } from 'culori';
import { useState, useEffect } from 'react';
import Head from 'next/head';

import Swatch from '../components/Swatch';

import './index.css';

const hex = formatter('hex');
const srgb = Object.keys(colorsNamed)
	.sort()
	.filter(c => !c.match(/grey/i))
	.map(c => ({ name: c, value: hex(c) }));

import profiles from '../data/profiles.json';

const options = [
	{
		id: 'srgb',
		name: 'sRGB',
		colors: srgb
	}
].concat(profiles);

const initialBg = '#f8f5f5';

const Home = () => {
	let [tab, setTab] = useState('srgb');
	let [list, setList] = useState(srgb);
	let [scale, setScale] = useState(10);
	let [bg, setBg] = useState(initialBg);

	let bgIsLight = wcagLuminance(bg) > 0.2;

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
		<div>
			<Head>
				<title>CMYK Named Colors</title>
			</Head>
			<header>
				<h1>CSS Named Colors, converted to CMYK and back</h1>
			</header>
			<div className="controls">
				<label>
					Color profile:{' '}
					<select value={tab} onChange={e => setTab(e.target.value)}>
						{options.map(o => (
							<option key={o.id} value={o.id}>
								{o.name}
							</option>
						))}
					</select>
				</label>
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
				<div className="swatches">
					<div
						className="swatchlist"
						style={{ '--scale': `${scale}em` }}
					>
						{list.map(({ name, value }, i) => (
							<Swatch
								color={value}
								key={i}
								name={name}
								compact={scale < 10}
								onClick={e => {
									setBg(value);
									e.stopPropagation();
								}}
							/>
						))}
					</div>
				</div>
			</article>
			<footer>
				A thing by <a href="http://danburzo.ro">Dan Burzo</a>. Source
				code available{' '}
				<a href="https://github.com/danburzo/webcolors-cmyk">
					on GitHub
				</a>
				.
			</footer>
		</div>
	);
};

export default Home;
