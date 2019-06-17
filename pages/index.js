// Libs
import { colorsNamed } from 'culori';
import { useState } from 'react';

// Data
import coatedFogra from '../data/cmyk-adobe-coated-fogra39.json';
import uncoatedFogra from '../data/cmyk-adobe-uncoated-fogra29.json';
import webCoated from '../data/cmyk-adobe-us-web-coated-swop.json';
import webUncoated from '../data/cmyk-adobe-us-web-uncoated.json';

import psoCoated from '../data/pso-coated-v3.json';
import psoUncoated from '../data/pso-uncoated-v3-fogra52.json';

import legacyFograCoated from '../data/legacy/fogra-coated.json';
import legacyFograUncoated from '../data/legacy/fogra-uncoated.json';
import legacyWebCoated from '../data/legacy/web-coated.json';
import legacyWebUncoated from '../data/legacy/web-uncoated.json';

import Swatch from '../components/Swatch';

import './index.css';

const rgb = Object.keys(colorsNamed)
	.sort()
	.filter(c => !c.match(/grey/i))
	.map(c => ({ converted: c }));

const colormap = {
	rgb,
	psoCoated,
	psoUncoated,
	legacyFograCoated,
	legacyFograUncoated,
	legacyWebCoated,
	legacyWebUncoated,
	coatedFogra,
	uncoatedFogra,
	webCoated,
	webUncoated
};

const Home = () => {
	let [tab, setTab] = useState('rgb');

	let list = colormap[tab];

	return (
		<article>
			<div>
				{Object.keys(colormap).map(k => (
					<button type="button" key={k} onClick={() => setTab(k)}>
						{k}
					</button>
				))}
			</div>
			<div className="swatches">
				<div className="swatchlist">
					{list.map(({ converted }, i) => (
						<Swatch color={converted} key={i} />
					))}
				</div>
			</div>
		</article>
	);
};

export default Home;
