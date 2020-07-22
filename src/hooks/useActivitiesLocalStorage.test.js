import React from 'react'
import { render } from '@testing-library/react'
import App from '../App'

describe('App.js', () => {
  beforeEach(() => {
    localStorage.clear
  })
  it('sets activities to local storage', () => {
    render(<App />)
    expect(localStorage.setItem).toHaveBeenCalledTimes(1)
  })

  it('gets activities from local storage', () => {
    render(<App />)
    expect(localStorage.getItem).toHaveBeenCalledTimes(1)
  })
})
