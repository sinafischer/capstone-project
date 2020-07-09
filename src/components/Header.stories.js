import React from 'react'
import GlobalStyle from '../GlobalStyle'
import Header from './Header'

export default {
  component: Header,
  title: 'Header',
}
export const ToStorybook = () => (
  <>
    <GlobalStyle />
    <Header />
  </>
)
ToStorybook.story = {
  name: 'Header',
}
