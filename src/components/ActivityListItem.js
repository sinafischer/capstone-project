import React from 'react'
import styled from 'styled-components'
import ShowMoreText from 'react-show-more-text'

export default function ActivityListItem({ activities }) {
  return (
    <>
      {activities.map(activity => {
        return (
          <StyledLi key={activity.name} activities={activities}>
            <DivisionLine data-testid="division-line" />
            <h3>{activity.name}</h3>
            <ShowMoreText lines={1} more="More" less="Less" expanded={false}>
              <p>{activity.details}</p>
            </ShowMoreText>
          </StyledLi>
        )
      })}
    </>
  )
}

const DivisionLine = styled.div`
  background-color: var(--primary);
  max-width: 100%;
  height: 1px;
  margin: 50px 0;
`

const StyledLi = styled.li`
  :last-child {
    margin-bottom: 100px;
  }
`
