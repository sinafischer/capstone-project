import React from 'react'
import activities from '../activities.json'

export default function ActivityList() {
  return (
    <ul>
      {activities.map((activity) => (
        <li>
          <h3>{activity.name}</h3>
          <p>{activity.details}</p>
        </li>
      ))}
    </ul>
  )
}
