import React from 'react'
import styled from 'styled-components'
import globe from '../images/globe.svg'

export default function Header() {
  return (
    <StyledHeader>
      <img src={globe} alt="" />
      <span>VacationDetails</span>
    </StyledHeader>
  )
}

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
