import React from 'react'
import styled from 'styled-components'
import ShowMoreText from 'react-show-more-text'
import { DivisionLine } from './DivisionLine'
import bookmarkInactive from '../images/bookmarkInactive.svg'
import bookmarkActive from '../images/bookmarkActive.svg'

export default function ActivityListItem({
  activities,
  setActivities,
  activitiesToShow,
}) {
  return (
    <>
      {activities &&
        activitiesToShow.map(activity => {
          return (
            <StyledLi key={activity.id} activitiesToShow={activitiesToShow}>
              <StyledBookmark onClick={() => toggleBookmark(activity.id)}>
                {activity.bookmarked ? (
                  <img src={bookmarkActive} alt="set bookmark" />
                ) : (
                  <img src={bookmarkInactive} alt="remove bookmark" />
                )}
              </StyledBookmark>
              <StyledActivityName>{activity.name}</StyledActivityName>
              <ShowMoreText lines={1} more="More" less="Less" expanded={false}>
                <p>{activity.details}</p>
              </ShowMoreText>
              <DivisionLine data-testid="division-line" />
            </StyledLi>
          )
        })}
    </>
  )

  function toggleBookmark(id) {
    const activityIndex = activities.findIndex(a => a.id === id)
    const activity = activities[activityIndex]
    activity.bookmarked = !activity.bookmarked
    setActivities([
      ...activities.slice(0, activityIndex),
      activity,
      ...activities.slice(activityIndex + 1),
    ])
  }
}

const StyledLi = styled.li`
  margin: 0 0 10px;
  padding: 0;
`
const StyledBookmark = styled.button`
  border: none;
  background: none;
  margin: 5px auto 5px 90%;
  :focus {
    outline: none;
  }
`
const StyledActivityName = styled.h3`
  margin-top: 10px;
`
