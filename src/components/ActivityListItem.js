import React, { useState } from 'react'
import styled from 'styled-components'
import ShowMoreText from 'react-show-more-text'
import { DivisionLine } from './DivisionLine'
import bookmarkInactive from '../images/bookmarkInactive.svg'
import bookmarkActive from '../images/bookmarkActive.svg'

export default function ActivityListItem({ activities, setActivities }) {
  const [activitiesToShow, setActivitiesToShow] = useState(activities)

  return (
    <>
      <button
        onClick={() =>
          setActivitiesToShow(
            activities.filter(activity => activity.bookmarked)
          )
        }
      >
        bookmarked
      </button>
      <button
        onClick={() =>
          setActivitiesToShow(
            activities.filter(activity => !activity.bookmarked)
          )
        }
      >
        not bookmarked
      </button>
      <button onClick={() => setActivitiesToShow(activities)}>reset</button>

      {activities &&
        activitiesToShow.map(activity => {
          return (
            <StyledLi key={activity.id} activitiesToShow={activitiesToShow}>
              <StyledBookmark onClick={() => toggleBookmark(activity.id)}>
                {activity.bookmarked ? (
                  <img src={bookmarkActive} alt="" />
                ) : (
                  <img src={bookmarkInactive} alt="" />
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
`
const StyledActivityName = styled.h3`
  margin-top: 10px;
`
