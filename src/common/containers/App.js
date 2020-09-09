import React from 'react';

export default function App({ children, ...props }) {
  return  <div {...props}>{children}</div>;
}
