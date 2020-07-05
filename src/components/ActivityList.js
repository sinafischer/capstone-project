import React from 'react'
import activities from '../activities.json'
import styled from 'styled-components'

export default function ActivityList() {
  return (
    <ActivityListContainer>
      <StyledActivityList>
        {activities.map((activity) => (
          <li>
            <h3>{activity.name}</h3>
            <p>{activity.details}</p>
          </li>
        ))}
      </StyledActivityList>
    </ActivityListContainer>
  )
}

const ActivityListContainer = styled.main`
  overflow: scroll;
`

const StyledActivityList = styled.ul`
  list-style: none;

  li {
    margin-bottom: 20px;
  }
`
