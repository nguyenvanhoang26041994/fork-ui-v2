import React from 'react';
import withIconEnhancer from './HOCs/withIconEnhancer';

export default withIconEnhancer('PictureInPictureOff', 'picture-in-picture-off', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M11 19h-6a2 2 0 0 1 -2 -2v-10a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v4" />
  <rect x="14" y="14" width="7" height="5" rx="1" />
  <line x1="7" y1="9" x2="11" y2="13" />
  <path d="M7 12v-3h3" />
</svg>
));
