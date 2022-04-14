import React from 'react'
import App from './src/WrapApp'
import Page from './src/WrapPage'

export const wrapRootElement = ({ element, props }) => {
  return <App {...props}>{element}</App>
}

export const wrapPageElement = ({ element, props }) => {
  return <Page {...props}>{element}</Page>
}
