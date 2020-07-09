import React from 'react'
import ActivityListItem from './ActivityListItem'
import { render, screen } from '@testing-library/react'

describe('ActivityListItem.test.js', () => {
  it('should contain headings', () => {
    render(<ActivityListItem />)
    expect(screen.getAllByRole('heading')).toBeInTheDocument()
  })

  // it('should exist a link more', () => {
  //   render(<ActivityListItem />)
  //   expect(screen.getAllByRole('h3')).toBeInTheDocument()
  // })
})
