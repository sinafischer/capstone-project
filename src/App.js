import React from 'react'
import styled from 'styled-components'
import ActivityList from './components/ActivityList'

export default function App() {
  return (
    <StyledApp>
      <h1>My Activities</h1>
      <ActivityList />
    </StyledApp>
  )
}
const StyledApp = styled.div`
  padding: 20px;
`
