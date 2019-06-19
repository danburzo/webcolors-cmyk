// Libs
import { colorsNamed } from 'culori';
import { useState, useEffect } from 'react';

import Swatch from '../components/Swatch';

import './index.css';

const srgb = Object.keys(colorsNamed)
	.sort()
	.filter(c => !c.match(/grey/i))
	.map(c => ({ name: c, value: c }));

import profiles from '../data/profiles.json';

const options = [
	{
		id: 'srgb',
		name: 'sRGB',
		colors: srgb
	}
].concat(profiles);

const Home = () => {
	let [tab, setTab] = useState('srgb');
	let [list, setList] = useState(srgb);

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
		<article>
			<select value={tab} onChange={e => setTab(e.target.value)}>
				{options.map(o => (
					<option key={o.id} value={o.id}>
						{o.name}
					</option>
				))}
			</select>
			<div className="swatches">
				<div className="swatchlist">
					{list.map(({ value }, i) => (
						<Swatch color={value} key={i} />
					))}
				</div>
			</div>
		</article>
	);
};

export default Home;
