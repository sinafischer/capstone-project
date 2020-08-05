import React, { useState } from 'react'
import styled from 'styled-components'
import ActivityListItem from '../components/ActivityListItem'
import plus from '../images/plus.svg'
import RouterLink from '../components/RouterLink'
import bookmarkInactive from '../images/bookmarkInactive.svg'
import bookmarkActive from '../images/bookmarkActive.svg'

const activitiesReducer = (state, action) => {
  switch (action.type) {
    case 'BOOKMARK_ACTIVITY':
      return state.map(activity => {
        if (activity.id === action.id) {
          return { ...activity, bookmarked: true }
        } else {
          return activity
        }
      })
    case 'UNBOOKMARK_ACTIVITY':
      return state.map(activity => {
        if (activity.id === action.id) {
          return { ...activity, bookmarked: false }
        } else {
          return activity
        }
      })
    default:
      return state
  }
}

export default function ActivityPage({ activities, setActivities }) {
  const [activitiesToShow, dispatch] = activitiesReducer(
    activitiesReducer,
    activities
  )

  return (
    <>
      <ButtonContainer>
        <FilterButton
          onClick={() =>
            setActivitiesToShow(
              activities.filter(activity => activity.bookmarked)
            )
          }
        >
          <StyledIcon src={bookmarkActive} alt="filter bookmarked" />
        </FilterButton>
        <FilterButton
          onClick={() =>
            setActivitiesToShow(
              activities.filter(activity => !activity.bookmarked)
            )
          }
        >
          <StyledIcon src={bookmarkInactive} alt="filter not bookmarked" />
        </FilterButton>
        <FilterButton
          onClick={() => setActivitiesToShow(activities)}
          aria-label="reset"
        >
          <StyledIcon src={bookmarkActive} alt="" />
          <StyledIcon src={plus} alt="" />
          <StyledIcon src={bookmarkInactive} alt="" />
        </FilterButton>
      </ButtonContainer>

      <StyledList>
        <ActivityListItem
          activities={activities}
          setActivities={setActivities}
          activitiesToShow={activitiesToShow}
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
const ButtonContainer = styled.div`
  display: flex;
  margin: 10px 30px 40px;
  justify-content: space-between;
`
const FilterButton = styled.button`
  display: block;
  width: 95px;
  height: 40px;
  border-radius: 20px;
  background: var(--senary);
  border: 2px solid var(--tertiary);
  color: var(--tertiary);
  margin: 0 auto;
`
const StyledIcon = styled.img`
  width: 15px;
  height: 18.5px;
`
