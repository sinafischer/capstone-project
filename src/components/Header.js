import React from 'react'
import styled from 'styled-components'
import globe from '../images/globe.svg'
import { DivisionLine } from './DivisionLine'

export default function Header() {
  return (
    <StyledHeader>
      <StyledGlobe src={globe} alt="" />
      <StyledHeadline>VacationDetails</StyledHeadline>
      <StyledDivisionLine />
    </StyledHeader>
  )
}

const StyledHeader = styled.header`
  /* display: flex;
  justify-content: flex-start;
  align-items: center;
  margin: 0 30px; */
  display: grid;
  grid-template-columns: 30px 65px auto 30px;
  grid-template-rows: auto auto;
  align-items: center;
`
const StyledHeadline = styled.h1`
  display: inline;
  grid-column-start: 3;
  grid-row-start: 1;
  font-family: 'Ubuntu', sans-serif;
  font-weight: 700;
  font-size: 21px;
  color: var(--primary);
`
const StyledGlobe = styled.img`
  grid-column-start: 2;
  grid-row-start: 1;
  margin: 30px 0 0;
`
const StyledDivisionLine = styled(DivisionLine)`
  grid-row-start: 3;
  grid-column-start: 2;
  grid-column-end: 4;
`
