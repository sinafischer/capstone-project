import { useState, useEffect } from 'react'

export default function useActivitiesLocalStorage() {
  const [activities, setActivities] = useState([])

  useEffect(() => {
    setActivities(JSON.parse(localStorage.getItem('myActivities') || '[]'))
  }, [])

  useEffect(() => {
    localStorage.setItem('myActivities', JSON.stringify(activities))
  }, [activities])

  return [activities, setActivities]
}