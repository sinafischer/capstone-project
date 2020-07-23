import React from 'react'
import styled from 'styled-components'

export default function NotFound() {
  return <StyledMessage>404 - Page not found</StyledMessage>
}

const StyledMessage = styled.h3`
  text-align: center;
`
