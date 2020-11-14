import React from 'react';

function Printer(props) {
	const fill = props.fill || 'currentColor';
	const secondaryfill = props.secondaryfill || fill;
	const width = props.width || '100%';
	const height = props.height || '100%';

	return (
		<svg height={height} width={width} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
	<g fill={secondaryfill}>
		<path d="M19,4H17V2H7V4H5V1A1,1,0,0,1,6,0H18a1,1,0,0,1,1,1Z"/>
		<path d="M19,5H5a5.006,5.006,0,0,0-5,5v8a1,1,0,0,0,1,1H5v4a1,1,0,0,0,1,1H18a1,1,0,0,0,1-1V19h4a1,1,0,0,0,1-1V10A5.006,5.006,0,0,0,19,5ZM17,22H7V15H17Zm1-11a1,1,0,1,1,1-1A1,1,0,0,1,18,11Z" fill={fill}/>
	</g>
</svg>
	);
};

export default Printer;