import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import home from '../images/home.svg'

export default function NotFound() {
  return (
    <>
      <StyledMessage>404 - Page not found</StyledMessage>
      <Link to="/">
        <StyledDiv>
          <StyledIcon src={home} />
        </StyledDiv>
      </Link>
    </>
  )
}

const StyledMessage = styled.h3`
  text-align: center;
`
const StyledIcon = styled.img`
  background: var(--senary);
  width: 35px;
  height: 35px;
`
const StyledDiv = styled.div`
  width: 65px;
  height: 65px;
  border-radius: 50px;
  border: 2px solid var(--tertiary);
  background: var(--senary);
  position: fixed;
  bottom: 30px;
  right: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
`
