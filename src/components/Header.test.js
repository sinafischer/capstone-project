import '@testing-library/jest-dom/extend-expect'
import React from 'react'
import Header from './Header'
import { render, screen } from '@testing-library/react'

describe('Header.test.js', () => {
  it('should exist a text content VacationDetails', () => {
    render(<Header />)
    expect(screen.getByText('VacationDetails')).toBeInTheDocument()
  })

  it('should exist an image', () => {
    render(<Header />)
    expect(screen.getByRole('img')).toBeInTheDocument()
  })

  it('should show an image', () => {
    render(<Header />)
    expect(screen.getByRole('img')).toBeVisible()
  })

  it('should show the text', () => {
    render(<Header />)
    expect(screen.getByText('VacationDetails')).toBeVisible()
  })
})
