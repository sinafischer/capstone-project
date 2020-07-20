import { useState, useEffect } from 'react'

export const useLocalStorage = key => {
  const [values, setValues] = useState([])

  useEffect(() => {
    setValues(JSON.parse(localStorage.getItem(key) || '[]'))
  }, [])

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(values))
  }, [values])

  return [values, setValues]
}
