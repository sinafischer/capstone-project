import '@testing-library/jest-dom/extend-expect'
import React from 'react'
import ActivityListItem from './ActivityListItem'
import { render, screen } from '@testing-library/react'

describe('ActivityListItem.test.js', () => {
  it('should display the activity name', () => {
    render(<ActivityListItem />)
    const activityName = screen.getAllByRole('heading')
    expect(activityName.length).toBeGreaterThan(4)
  })

  it('should display links', () => {
    render(<ActivityListItem />)
    const linkMore = screen.getAllByRole('link')
    expect(linkMore.length).toBeGreaterThan(4)
  })
  it('should display a division lines', () => {
    render(<ActivityListItem />)
    const divisionLines = screen.getAllByTestId('division-line')
    expect(divisionLines.length).toBeGreaterThan(4)
  })
})
