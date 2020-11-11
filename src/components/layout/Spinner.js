import React from 'react';

function Spinner() {
  return (
    <div style={spinnerStyles} className='spinner'>
      <svg
        xmlns='http://www.w3.org/2000/svg'
        viewBox='0 0 32 32'
        width='32'
        height='32'
        fill='#dc3545'
      >
        <path transform='translate(2)' d='M0 12 V20 H4 V12z'>
          <animate
            attributeName='d'
            values='M0 12 V20 H4 V12z; M0 4 V28 H4 V4z; M0 12 V20 H4 V12z; M0 12 V20 H4 V12z'
            dur='1.2s'
            repeatCount='indefinite'
            begin='0'
            keyTimes='0;.2;.5;1'
            keySplines='0.2 0.2 0.4 0.8;0.2 0.6 0.4 0.8;0.2 0.8 0.4 0.8'
            calcMode='spline'
          />
        </path>
        <path transform='translate(8)' d='M0 12 V20 H4 V12z'>
          <animate
            attributeName='d'
            values='M0 12 V20 H4 V12z; M0 4 V28 H4 V4z; M0 12 V20 H4 V12z; M0 12 V20 H4 V12z'
            dur='1.2s'
            repeatCount='indefinite'
            begin='0.2'
            keyTimes='0;.2;.5;1'
            keySplines='0.2 0.2 0.4 0.8;0.2 0.6 0.4 0.8;0.2 0.8 0.4 0.8'
            calcMode='spline'
          />
        </path>
        <path transform='translate(14)' d='M0 12 V20 H4 V12z'>
          <animate
            attributeName='d'
            values='M0 12 V20 H4 V12z; M0 4 V28 H4 V4z; M0 12 V20 H4 V12z; M0 12 V20 H4 V12z'
            dur='1.2s'
            repeatCount='indefinite'
            begin='0.4'
            keyTimes='0;.2;.5;1'
            keySplines='0.2 0.2 0.4 0.8;0.2 0.6 0.4 0.8;0.2 0.8 0.4 0.8'
            calcMode='spline'
          />
        </path>
        <path transform='translate(20)' d='M0 12 V20 H4 V12z'>
          <animate
            attributeName='d'
            values='M0 12 V20 H4 V12z; M0 4 V28 H4 V4z; M0 12 V20 H4 V12z; M0 12 V20 H4 V12z'
            dur='1.2s'
            repeatCount='indefinite'
            begin='0.6'
            keyTimes='0;.2;.5;1'
            keySplines='0.2 0.2 0.4 0.8;0.2 0.6 0.4 0.8;0.2 0.8 0.4 0.8'
            calcMode='spline'
          />
        </path>
        <path transform='translate(26)' d='M0 12 V20 H4 V12z'>
          <animate
            attributeName='d'
            values='M0 12 V20 H4 V12z; M0 4 V28 H4 V4z; M0 12 V20 H4 V12z; M0 12 V20 H4 V12z'
            dur='1.2s'
            repeatCount='indefinite'
            begin='0.8'
            keyTimes='0;.2;.5;1'
            keySplines='0.2 0.2 0.4 0.8;0.2 0.6 0.4 0.8;0.2 0.8 0.4 0.8'
            calcMode='spline'
          />
        </path>
      </svg>
      <h3>Loading...</h3>
    </div>
  );
}

const spinnerStyles = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translateX(-5rem) translateY(-3rem)',
  zIndex: 100,
  color: '#616466',
  display: 'flex',
  flexWrap: 'wrap',
  flexDirection: 'column',
  width: '10rem',
  height: '10rem',
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: '5px',
  backgroundColor: '#FFFFFF',
  boxShadow:
    '0 2.2px 3.6px rgba(0, 0, 0, 0.014), 0 6px 10px rgba(0, 0, 0, 0.02), 0 14.5px 24.1px rgba(0, 0, 0, 0.026), 0 48px 80px rgba(0, 0, 0, 0.04)',
};

export default Spinner;
