import React from 'react'
import styled from 'styled-components'
import ShowMoreText from 'react-show-more-text'
import { DivisionLine } from './DivisionLine'

export default function ActivityListItem({ activities }) {
  return (
    <>
      {activities.map(activity => {
        return (
          <StyledLi key={activity.id} activities={activities}>
            <h3>{activity.name}</h3>
            <ShowMoreText lines={1} more="More" less="Less" expanded={false}>
              <p>{activity.details}</p>
            </ShowMoreText>
            <DivisionLine data-testid="division-line" />
          </StyledLi>
        )
      })}
    </>
  )
}

const StyledLi = styled.li`
  margin: 0 0 10px;
  padding: 0;
`
