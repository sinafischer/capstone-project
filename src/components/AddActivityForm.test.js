import React from 'react'
import '@testing-library/jest-dom'
import '@testing-library/jest-dom/extend-expect'
import { render, screen, fireEvent } from '@testing-library/react'
import AddActivityForm from './AddActivityForm'

describe('AddActivityForm.test.js', () => {
  it('should display the entered value of the name input field after change event', () => {
    render(<AddActivityForm />)
    const nameInput = screen.getByTestId('activity-name')
    fireEvent.change(nameInput, { target: { value: 'activity name' } })
    expect(nameInput.value).toBe('activity name')
  })

  it('should display the entered value of the details input field after change event', () => {
    render(<AddActivityForm />)
    const nameInput = screen.getByLabelText('Activity details')
    fireEvent.change(nameInput, { target: { value: 'activity details' } })
    expect(nameInput.value).toBe('activity details')
  })

  it('submits the values when name input meets required length', () => {
    const setActivity = jest.fn()
    const { getByText } = render(<AddActivityForm setActivity={setActivity} />)
    const nameInput = screen.getByTestId('activity-name')
    fireEvent.change(nameInput, { target: { value: 'activity name' } })
    fireEvent.click(getByText('Add'))
    expect(setActivity).toHaveBeenCalled()
  })

  it('does not call submit when the name input is less than 3 characters', () => {
    const setActivity = jest.fn()
    const { getByText } = render(<AddActivityForm setActivity={setActivity} />)
    const nameInput = screen.getByTestId('activity-name')
    fireEvent.change(nameInput, { target: { value: 'a' } })
    fireEvent.click(getByText('Add'))
    expect(setActivity).not.toHaveBeenCalled()
  })
})
