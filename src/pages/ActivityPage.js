import React, { useState } from 'react'
import styled from 'styled-components'
import ActivityListItem from '../components/ActivityListItem'
import plus from '../images/plus.svg'
import RouterLink from '../components/RouterLink'
import bookmarkInactive from '../images/bookmarkInactive.svg'
import bookmarkActive from '../images/bookmarkActive.svg'

export default function ActivityPage({ activities, setActivities }) {
  const [activitiesToShow, setActivitiesToShow] = useState(activities)

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
  :focus {
    outline: none;
  }
`
const StyledIcon = styled.img`
  width: 15px;
  height: 18.5px;
`
