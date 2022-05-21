import React from 'react';
import withIconEnhancer from './HOCs/withIconEnhancer';

export default withIconEnhancer('VectorTriangle', 'vector-triangle', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <rect x="10" y="4" width="4" height="4" rx="1" />
  <rect x="3" y="17" width="4" height="4" rx="1" />
  <rect x="17" y="17" width="4" height="4" rx="1" />
  <line x1="6.5" y1="17.1" x2="11.5" y2="8" />
  <line x1="17.5" y1="17.1" x2="12.5" y2="8" />
  <line x1="7" y1="19" x2="17" y2="19" />
</svg>
));
