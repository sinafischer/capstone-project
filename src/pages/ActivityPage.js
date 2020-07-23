import React from 'react'
import styled from 'styled-components'
import ActivityListItem from '../components/ActivityListItem'
import plus from '../images/plus.svg'
import { Link } from 'react-router-dom'

export default function ActivityPage({ activities }) {
  return (
    <>
      <StyledList>
        <ActivityListItem activities={activities} />
      </StyledList>
      <Link to="/create">
        <StyledDiv>
          <StyledIcon src={plus} data-testid="add" />
        </StyledDiv>
      </Link>
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

const StyledIcon = styled.img`
  background: var(--senary);
  width: 35px;
  height: 35px;
`
const StyledDiv = styled.div`
  width: 65px;
  height: 65px;
  border-radius: 50px;
  border: 2px solid var(--tertiary);
  background: var(--senary);
  position: fixed;
  bottom: 30px;
  right: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
`
