import React from 'react';
import withIconEnhancer from './HOCs/withIconEnhancer';

export default withIconEnhancer('ToolsKitchen', 'tools-kitchen', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M4 3h8l-1 9h-6z" />
  <path d="M7 18h2v3h-2z" />
  <path d="M20 3v12h-5c-.023 -3.681 .184 -7.406 5 -12z" />
  <path d="M20 15v6h-1v-3" />
  <line x1="8" y1="12" x2="8" y2="18" />
</svg>
));
