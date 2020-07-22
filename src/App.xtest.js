import React from 'react'
import { render } from '@testing-library/react'
import App from './App'
import { createMemoryHistory } from 'history'
import { Router } from 'react-router'

describe('App.js', () => {
  beforeEach(() => {
    localStorage.clear
  })
  it('sets activities to local storage', () => {
    const history = createMemoryHistory()
    render(
      <Router history={history}>
        <App />
      </Router>
    )
    expect(localStorage.setItem).toHaveBeenCalledTimes(1)
  })

  it('gets activities from local storage', () => {
    render(
      <Router history={history}>
        <App />
      </Router>
    )
    expect(localStorage.getItem).toHaveBeenCalledTimes(1)
  })
})
