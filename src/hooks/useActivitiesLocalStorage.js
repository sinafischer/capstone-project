import { useState, useEffect } from 'react'

export default function useActivitiesLocalStorage() {
  const initialActivities = () =>
    JSON.parse(localStorage.getItem('myActivities') || '[]')
  const [activities, setActivities] = useState(initialActivities)

  useEffect(() => {
    localStorage.setItem('myActivities', JSON.stringify(activities))
  }, [activities])

  return [activities, setActivities]
}
