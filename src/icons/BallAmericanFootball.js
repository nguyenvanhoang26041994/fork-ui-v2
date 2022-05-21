import React from 'react';
import withIconEnhancer from './HOCs/withIconEnhancer';

export default withIconEnhancer('BallAmericanFootball', 'ball-american-football', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <line x1="15" y1="9" x2="9" y2="15" />
  <line x1="10" y1="12" x2="12" y2="14" />
  <line x1="12" y1="10" x2="14" y2="12" />
  <path d="M8 21a5 5 0 0 0 -5 -5" />
  <path d="M16 3c-7.18 0 -13 5.82 -13 13a5 5 0 0 0 5 5c7.18 0 13 -5.82 13 -13a5 5 0 0 0 -5 -5" />
  <path d="M16 3a5 5 0 0 0 5 5" />
</svg>
));
