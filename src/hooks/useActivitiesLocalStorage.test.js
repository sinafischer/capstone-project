import React from 'react'
import { render } from '@testing-library/react'
import App from '../App'
import { createMemoryHistory } from 'history'
import { Router } from 'react-router'

describe('App.js', () => {
  beforeEach(() => {
    localStorage.clear()
  })
  it('sets activities to local storage', () => {
    const history = createMemoryHistory()
    render(
      <Router history={history}>
        <App />
      </Router>
    )
    // toHaveBeenCalledTimes not used, because useEffect can be triggered for several reasons/times
    expect(localStorage.setItem).toHaveBeenCalled()
  })

  it('gets activities from local storage', () => {
    const history = createMemoryHistory()
    render(
      <Router history={history}>
        <App />
      </Router>
    )
    // toHaveBeenCalledTimes not used, because useEffect can be triggered for several reasons/times
    expect(localStorage.getItem).toHaveBeenCalled()
  })
})
