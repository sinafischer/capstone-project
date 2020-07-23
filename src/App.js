import React from 'react'
import styled from 'styled-components'
import Header from './components/Header'
import ActivityPage from './pages/ActivityPage'
import AddActivityForm from './components/AddActivityForm'
import useActivitiesLocalStorage from './hooks/useActivitiesLocalStorage'
import { Switch, Route } from 'react-router-dom'

export default function App() {
  const [activities, setActivities] = useActivitiesLocalStorage()

  return (
    <AppGrid>
      <Header />
      <Main>
        <Switch>
          <Route exact path="/" component={ActivityPage}>
            <ActivityPage activities={activities} />
          </Route>
          <Route path="/create" component={AddActivityForm}>
            <AddActivityForm setActivity={updateActivities} />
          </Route>
        </Switch>
      </Main>
    </AppGrid>
  )
  function updateActivities(newActivity) {
    setActivities([...activities, newActivity])
  }
}

const AppGrid = styled.div`
  display: grid;
  grid-template-rows: 130px auto;
  height: 100vh;
`
const Main = styled.main`
  overflow-y: scroll;
  position: relative;
  &::after {
    content: '';
    display: block;
    height: 40px;
  }
`
