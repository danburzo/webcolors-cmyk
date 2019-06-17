// Libs
import { colorsNamed } from 'culori';
import { useState } from 'react';

// Data
import coatedFogra from '../data/cmyk-adobe-coated-fogra39.json';
import uncoatedFogra from '../data/cmyk-adobe-uncoated-fogra29.json';
import webCoated from '../data/cmyk-adobe-us-web-coated-swop.json';
import webUncoated from '../data/cmyk-adobe-us-web-uncoated.json';

import Swatch from '../components/Swatch';

import './index.css';

const rgb = Object.keys(colorsNamed)
	.sort()
	.map(c => ({ converted: c }));

const colormap = {
	rgb,
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
				<button type="button" onClick={() => setTab('rgb')}>
					RGB
				</button>
				<button type="button" onClick={() => setTab('coatedFogra')}>
					Coated FOGRA 39
				</button>
				<button type="button" onClick={() => setTab('uncoatedFogra')}>
					Uncoated FOGRA 29
				</button>
				<button type="button" onClick={() => setTab('webCoated')}>
					US Web Coated SWOP
				</button>
				<button type="button" onClick={() => setTab('webUncoated')}>
					US Web Uncoated
				</button>
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
