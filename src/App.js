import React, { useState } from 'react'
import styled from 'styled-components'
import Header from './components/Header'
import ActivityListItem from './components/ActivityListItem'
import AddActivityForm from './components/AddActivityForm'

export default function App() {
  const [activities, setActivities] = useState([])

  return (
    <AppGrid>
      <Header />
      <Main>
        <AddActivityForm setActivity={updateActivities} />
        <StyledList>
          <ActivityListItem activities={activities} />
        </StyledList>
      </Main>
    </AppGrid>
  )
  function updateActivities(newActivity) {
    setActivities([...activities, newActivity])
  }
}

const StyledList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0 30px;
  display: flex;
  flex-direction: column-reverse;
`
const AppGrid = styled.div`
  display: grid;
  grid-template: 130px auto;
  height: 100vh;
`
const Main = styled.main`
  overflow-y: scroll;
  &::after {
    content: '';
    display: block;
    height: 40px;
  }
`
