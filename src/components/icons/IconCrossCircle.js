import React from 'react';

function IconCrossCircle(props) {
  const title = props.title || 'c remove';
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
          d='M12,0A12,12,0,1,0,24,12,12.035,12.035,0,0,0,12,0Zm4.95,15.536L15.536,16.95,12,13.414,8.464,16.95,7.05,15.536,10.586,12,7.05,8.464,8.464,7.05,12,10.586,15.536,7.05,16.95,8.464,13.414,12Z'
          fill={color}
        />
      </g>
    </svg>
  );
}

export default IconCrossCircle;
