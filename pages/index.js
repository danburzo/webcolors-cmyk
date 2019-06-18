// Libs
import { colorsNamed } from 'culori';
import { useState } from 'react';

import psoCoated from '../data/pso-coated-v3-fogra51.json';
import psoUncoated from '../data/pso-uncoated-v3-fogra52.json';
import coatedFogra39 from '../data/iso-coated-v2-fogra39.json';
import uncoatedFogra29 from '../data/iso-uncoated-fogra29.json';
import adobeCoatedFogra39 from '../data/adobe-coated-fogra39.json';
import adobeUncoatedFogra29 from '../data/adobe-uncoated-fogra29.json';
import adobeUsWebCoated from '../data/adobe-us-web-coated-swop-v2.json';
import adobeUsWebUncoated from '../data/adobe-us-web-uncoated-v2.json';

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
	coatedFogra39,
	adobeCoatedFogra39,
	uncoatedFogra29,
	adobeUncoatedFogra29,
	adobeUsWebCoated,
	adobeUsWebUncoated
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
