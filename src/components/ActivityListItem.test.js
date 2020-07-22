import '@testing-library/jest-dom/extend-expect'
import React from 'react'
import ActivityListItem from './ActivityListItem'
import { render, screen } from '@testing-library/react'

describe('ActivityListItem.test.js', () => {
  it('should display the activity name', () => {
    const activities = [
      { name: 'test name', details: 'test details', id: 'test id' },
    ]
    render(<ActivityListItem activities={activities} />)
    const activityName = screen.getAllByRole('heading')
    expect(activityName.length).toBeGreaterThan(0)
  })

  it('should display links', () => {
    const activities = [{ name: 'test name', details: 'test details' }]
    render(<ActivityListItem activities={activities} />)
    const linkMore = screen.getAllByRole('link')
    expect(linkMore.length).toBeGreaterThan(0)
  })

  it('should display a division lines', () => {
    const activities = [{ name: 'test name', details: 'test details' }]
    render(<ActivityListItem activities={activities} />)
    const divisionLines = screen.getAllByTestId('division-line')
    expect(divisionLines.length).toBeGreaterThan(0)
  })
})
