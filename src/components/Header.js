import React from 'react'
import styled from 'styled-components'
import globe from '../images/globe.svg'

export default function Header() {
  return (
    <>
      <StyledHeader>
        <img src={globe} alt="" />
        <StyledHeadline>VacationDetails</StyledHeadline>
      </StyledHeader>
      <DivisionLine />
    </>
  )
}

const StyledHeader = styled.header`
  display: flex;
  justify-content: left;
  align-items: center;
  margin: 30px 0 0 30px;
`
const StyledHeadline = styled.h1`
  display: inline;
  font-family: 'Ubuntu', sans-serif;
  font-weight: 700;
  font-size: 21px;
  color: var(--primary);
`
const DivisionLine = styled.div`
  background-color: var(--primary);
  max-width: 100%;
  height: 1px;
  margin: 50px 30px 0;
`
