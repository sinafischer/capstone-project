import React from 'react'
import styled from 'styled-components'
import Header from './components/Header'
import ActivityListItem from './components/ActivityListItem'

export default function App() {
  return (
    <div>
      <Header />
      <StyledList>
        <ActivityListItem />
      </StyledList>
    </div>
  )
}

const StyledList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 30px 30px;
`
