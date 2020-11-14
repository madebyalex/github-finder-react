import React from 'react';

function UserFrame31(props) {
	const fill = props.fill || 'currentColor';
	const secondaryfill = props.secondaryfill || fill;
	const width = props.width || '100%';
	const height = props.height || '100%';

	return (
		<svg height={height} width={width} version="1.1" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" xmlSpace="preserve">
	<g fill={secondaryfill}>
		<path d="M23,0H1C0.448,0,0,0.448,0,1v22c0,0.552,0.448,1,1,1h22c0.552,0,1-0.448,1-1V1C24,0.448,23.552,0,23,0z M8,8&#xA;&#x9;c0-2.209,1.791-4,4-4c2.209,0,4,1.791,4,4v1c0,2.209-1.791,4-4,4c-2.209,0-4-1.791-4-4V8z M18,21H6c-0.552,0-1-0.448-1-1&#xA;&#x9;c0-2.761,2.239-5,5-5h4c2.761,0,5,2.239,5,5C19,20.552,18.552,21,18,21z" fill={fill}/>
	</g>
</svg>
	);
};

export default UserFrame31;