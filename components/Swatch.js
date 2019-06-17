import React from 'react';

import './Swatch.css';

export default ({ color }) => (
	<div className="swatch" style={{ backgroundColor: color }}></div>
);
