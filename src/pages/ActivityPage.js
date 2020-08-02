import React from 'react'
import styled from 'styled-components'
import ActivityListItem from '../components/ActivityListItem'
import plus from '../images/plus.svg'
import RouterLink from '../components/RouterLink'

export default function ActivityPage({ activities, setActivities }) {
  return (
    <>
      <StyledList>
        <ActivityListItem
          activities={activities}
          setActivities={setActivities}
        />
      </StyledList>
      <RouterLink route={'/create'} icon={plus} />
    </>
  )
}

const StyledList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0 30px;
  display: flex;
  flex-direction: column-reverse;
`
