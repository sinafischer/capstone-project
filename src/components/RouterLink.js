import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

export default function RouterLink({ icon, route }) {
  return (
    <Link to={route}>
      <StyledIconContainer>
        <StyledIcon src={icon} />
      </StyledIconContainer>
    </Link>
  )
}

const StyledIcon = styled.img`
  background: var(--senary);
  width: 35px;
  height: 35px;
`
const StyledIconContainer = styled.div`
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
