import React from 'react'
import '@testing-library/jest-dom'
import '@testing-library/jest-dom/extend-expect'
import { render, screen, fireEvent } from '@testing-library/react'
import AddActivityForm from './AddActivityForm'
import { createMemoryHistory } from 'history'
import { Router } from 'react-router'

describe('AddActivityForm.test.js', () => {
  const history = createMemoryHistory()

  it('should display the entered value of the name input field after change event', () => {
    render(
      <Router history={history}>
        <AddActivityForm />
      </Router>
    )
    const nameInput = screen.getByTestId('activity-name')
    fireEvent.change(nameInput, { target: { value: 'activity name' } })
    expect(nameInput.value).toBe('activity name')
  })

  it('should display the entered value of the details input field after change event', () => {
    render(
      <Router history={history}>
        <AddActivityForm />
      </Router>
    )
    const nameInput = screen.getByLabelText('Activity details')
    fireEvent.change(nameInput, { target: { value: 'activity details' } })
    expect(nameInput.value).toBe('activity details')
  })

  it('submits the values when name input meets required length', () => {
    const setActivity = jest.fn()
    const { getByText } = render(
      <Router history={history}>
        <AddActivityForm setActivity={setActivity} />
      </Router>
    )
    const nameInput = screen.getByTestId('activity-name')
    fireEvent.change(nameInput, { target: { value: 'activity name' } })
    fireEvent.click(getByText('Add'))
    expect(setActivity).toHaveBeenCalled()
  })

  it('does not call submit when the name input is less than 3 characters', () => {
    const setActivity = jest.fn()
    const { getByText } = render(
      <Router history={history}>
        <AddActivityForm setActivity={setActivity} />
      </Router>
    )
    const nameInput = screen.getByTestId('activity-name')
    fireEvent.change(nameInput, { target: { value: 'a' } })
    fireEvent.click(getByText('Add'))
    expect(setActivity).not.toHaveBeenCalled()
  })
})
