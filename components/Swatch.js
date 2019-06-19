import React from 'react';

import './Swatch.css';

export default ({ name, color, compact, onClick }) => (
	<li className="swatch">
		<button
			type="button"
			className="swatch__color"
			onClick={onClick}
			style={{ backgroundColor: color }}
			aria-label={name}
		></button>
		{!compact && (
			<React.Fragment>
				<code className="swatch__value">{color}</code>
				<p className="swatch__name">{name}</p>
			</React.Fragment>
		)}
	</li>
);
