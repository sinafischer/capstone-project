import React from 'react'
import activities from '../activities.json'
import styled from 'styled-components'
import ShowMoreText from 'react-show-more-text'

export default function ActivityList() {
  return (
    <>
      {activities.map((activity) => {
        return (
          <li key={activity.name}>
            <DivisionLine />
            <h3>{activity.name}</h3>
            <ShowMoreText lines={1} more="More" less="Less" expanded={false}>
              <p>{activity.details}</p>
            </ShowMoreText>
          </li>
        )
      })}
    </>
  )
}

const DivisionLine = styled.div`
  background-color: var(--primary);
  width: 320px;
  height: 1px;
  margin: 50px 0;
`
