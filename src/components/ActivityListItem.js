import React from 'react'
import activities from '../activities.json'
import styled from 'styled-components'

export default function ActivityList() {
  return (
    <>
      {activities.map((activity) => {
        return (
          <li>
            <DivisionLine />
            <h3>{activity.name}</h3>
            <p>{activity.details}</p>
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
