import React from 'react';

function Notification69(props) {
	const fill = props.fill || 'currentColor';
	const secondaryfill = props.secondaryfill || fill;
	const width = props.width || '100%';
	const height = props.height || '100%';

	return (
		<svg height={height} width={width} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
	<g fill={secondaryfill}>
		<path d="M19.525,1.149a1,1,0,0,0-.972-.044L10.764,5H5A5,5,0,0,0,5,15h5.764L18.553,18.9A1,1,0,0,0,20,18V2A1,1,0,0,0,19.525,1.149Z" fill={fill}/>
		<path d="M21,7v6a3,3,0,0,0,0-6Z"/>
		<path d="M10.142,17H5.813l2.334,5.744a2,2,0,0,0,3.708-1.492Z"/>
	</g>
</svg>
	);
};

export default Notification69;