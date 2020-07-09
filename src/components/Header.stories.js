import React from 'react'
import GlobalStyle from '../GlobalStyle'
import Header from './Header'
import styled from 'styled-components'
import globe from '../images/globe.svg'
import { addDecorator } from '@storybook/react'

export default {
  component: Header,
  title: 'Header',
}

addDecorator(s => (
  <>
    <GlobalStyle />
    {s()}
  </>
))

export const ToStorybook = () => (
  <StyledHeader>
    <img src={globe} alt="" />
    <span>VacationDetails</span>
  </StyledHeader>
)
const StyledHeader = styled.header`
  font-family: 'Ubuntu', sans-serif;
  font-weight: 700;
  font-size: 21px;
  color: var(--primary);
  display: flex;
  justify-content: left;
  align-items: center;
  margin: 30px;
`
