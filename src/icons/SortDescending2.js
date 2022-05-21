import React from 'react';
import withIconEnhancer from './HOCs/withIconEnhancer';

export default withIconEnhancer('SortDescending2', 'sort-descending-2', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <rect x="5" y="5" width="5" height="5" rx=".5" />
  <rect x="5" y="14" width="5" height="5" rx=".5" />
  <path d="M14 15l3 3l3 -3" />
  <path d="M17 18v-12" />
</svg>
));
