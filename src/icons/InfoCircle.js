import React from 'react';
import withIconEnhancer from './HOCs/withIconEnhancer';

export default withIconEnhancer('InfoCircle', 'info-circle', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <circle cx="12" cy="12" r="9" />
  <line x1="12" y1="8" x2="12.01" y2="8" />
  <polyline points="11 12 12 12 12 16 13 16" />
</svg>
));
