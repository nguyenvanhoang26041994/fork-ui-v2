import React from 'react';
import withIconEnhancer from './HOCs/withIconEnhancer';

export default withIconEnhancer('AdjustmentsAlt', 'adjustments-alt', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <rect x="4" y="8" width="4" height="4" />
  <line x1="6" y1="4" x2="6" y2="8" />
  <line x1="6" y1="12" x2="6" y2="20" />
  <rect x="10" y="14" width="4" height="4" />
  <line x1="12" y1="4" x2="12" y2="14" />
  <line x1="12" y1="18" x2="12" y2="20" />
  <rect x="16" y="5" width="4" height="4" />
  <line x1="18" y1="4" x2="18" y2="5" />
  <line x1="18" y1="9" x2="18" y2="20" />
</svg>
));
