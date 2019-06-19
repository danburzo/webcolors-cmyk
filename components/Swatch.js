import React from 'react';

import './Swatch.css';

export default ({ name, color, compact, onClick }) => (
	<li className="swatch">
		<button
			type="button"
			className="swatch__color"
			onClick={onClick}
			style={{ backgroundColor: color }}
		></button>
		{!compact && (
			<React.Fragment>
				<code className="swatch__value">{color}</code>
				<h3 className="swatch__name">{name}</h3>
			</React.Fragment>
		)}
	</li>
);
