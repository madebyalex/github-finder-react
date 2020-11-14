import React from 'react';

function IconCheckmarkCircle(props) {
  const title = props.title || 'c check';
  const color = props.color || '#414446';
  const roleAttr = title ? 'img' : 'presentation';

  return (
    <svg
      height='24'
      width='24'
      viewBox='0 0 24 24'
      xmlns='http://www.w3.org/2000/svg'
      role={roleAttr}
    >
      <title>{title}</title>
      <g fill={color}>
        <path
          d='M12,0A12,12,0,1,0,24,12,12.035,12.035,0,0,0,12,0ZM10,17.414,4.586,12,6,10.586l4,4,8-8L19.414,8Z'
          fill={color}
        />
      </g>
    </svg>
  );
}

export default IconCheckmarkCircle;
