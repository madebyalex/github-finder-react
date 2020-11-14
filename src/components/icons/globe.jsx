import React from 'react';

function Globe(props) {
	const fill = props.fill || 'currentColor';
	const secondaryfill = props.secondaryfill || fill;
	const width = props.width || '100%';
	const height = props.height || '100%';

	return (
		<svg height={height} width={width} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
	<g fill={secondaryfill}>
		<path d="M12,0C5.383,0,0,5.383,0,12s5.383,12,12,12s12-5.383,12-12S18.617,0,12,0z M21.949,11h-3.476 c-0.138-3.21-0.931-6.02-2.141-7.999C19.395,4.482,21.597,7.468,21.949,11z M11,2.3V11H7.525C7.734,6.531,9.315,3.26,11,2.3z M11,13 v8.7c-1.685-0.96-3.266-4.231-3.475-8.7H11z M13,21.7V13h3.475C16.266,17.469,14.685,20.74,13,21.7z M13,11V2.3 c1.685,0.96,3.266,4.231,3.475,8.7H13z M7.667,3.001C6.458,4.98,5.664,7.79,5.526,11H2.051C2.403,7.468,4.605,4.482,7.667,3.001z M2.051,13h3.476c0.138,3.21,0.931,6.02,2.141,7.999C4.605,19.518,2.403,16.532,2.051,13z M16.333,20.999 c1.209-1.979,2.003-4.789,2.141-7.999h3.476C21.597,16.532,19.395,19.518,16.333,20.999z" fill={fill}/>
	</g>
</svg>
	);
};

export default Globe;