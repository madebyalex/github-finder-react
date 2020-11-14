import React from 'react';

function Pin3(props) {
	const fill = props.fill || 'currentColor';
	const secondaryfill = props.secondaryfill || fill;
	const width = props.width || '100%';
	const height = props.height || '100%';

	return (
		<svg height={height} width={width} version="1.1" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" xmlSpace="preserve">
	<g fill={secondaryfill}>
		<path d="M12,0C7.6,0,3,3.4,3,9c0,5.3,8,13.4,8.3,13.7c0.2,0.2,0.4,0.3,0.7,0.3s0.5-0.1,0.7-0.3C13,22.4,21,14.3,21,9 C21,3.4,16.4,0,12,0z M12,12c-1.7,0-3-1.3-3-3s1.3-3,3-3s3,1.3,3,3S13.7,12,12,12z" fill={fill}/>
	</g>
</svg>
	);
};

export default Pin3;