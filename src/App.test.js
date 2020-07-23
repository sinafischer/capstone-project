import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import { createMemoryHistory } from 'history'
import { Router } from 'react-router'
import '@testing-library/jest-dom'
import '@testing-library/jest-dom/extend-expect'
import App from './App'

describe('App.test.js', () => {
  it('renders the app and navigates', () => {
    const history = createMemoryHistory()
    const { getByTestId } = render(
      <Router history={history}>
        <App />
      </Router>
    )
    expect(screen.getByTestId('add')).toBeInTheDocument()

    fireEvent.click(getByTestId('add'))
    expect(screen.getByText('Activity name')).toBeInTheDocument()
  })

  it('shows 404 page when landing on a bad page ', () => {
    const history = createMemoryHistory()
    history.push('/some/bad/route')
    const { getByText } = render(
      <Router history={history}>
        <App />
      </Router>
    )
    expect(screen.getByText('404 - Page not found')).toBeInTheDocument()
  })
})
