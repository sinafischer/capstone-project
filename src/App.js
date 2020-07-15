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
        <AddActivityForm onSubmit={updateActivities} />
        <StyledList>
          <ActivityListItem activities={activities} />
        </StyledList>
      </Main>
    </AppGrid>
  )
  function updateActivities(activity, event) {
    event.target.reset()
    event.target[0].focus()
    setActivities([...activities, activity])
  }
}

const StyledList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 30px 30px;
`
const AppGrid = styled.div`
  display: grid;
  grid-template: 55px auto;
  height: 100vh;
`
const Main = styled.main`
  overflow-y: scroll;
`
