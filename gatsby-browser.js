import React from 'react';
import App from './src/WrapApp';
import Page from './src/WrapPage';

export const wrapRootElement = ({ element, props }) => (
  <App {...props}>{element}</App>
);

export const wrapPageElement = ({ element, props }) => (
  <Page {...props}>{element}</Page>
);
