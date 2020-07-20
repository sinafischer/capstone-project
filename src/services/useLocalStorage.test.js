import React from 'react'
import '@testing-library/jest-dom'
import '@testing-library/jest-dom/extend-expect'
import '@react-mock/localstorage'
import useLocalStorage from './services/localStorage'

const renderComponent = ({ name }) =>
  render(
    <LocalStorageMock items={{ name }}>
      <PersistentForm />
    </LocalStorageMock>
  )

const submitForm = ({ getByText, getByLabelText }, { name }) => {
  fireEvent.change(getByLabelText('Name'), { target: { value: name } })
  fireEvent.click(getByText(/change name/i))
}

it('renders cached name', async () => {
  // Render new instance in every test to prevent leaking state
  const { getByText } = renderComponent({ name: 'Trent' })

  await waitForElement(() => getByText(/welcome, Trent/i))
})

describe('on update', () => {
  it('renders updated name', async () => {
    // Render new instance in every test to prevent leaking state
    const utils = renderComponent({ name: 'Trent' })
    submitForm(utils, { name: 'Trevor' })

    await waitForElement(() => utils.getByText(/welcome, Trevor/i))
  })

  it('updates LocalStorage cache', () => {
    // Render new instance in every test to prevent leaking state
    const utils = renderComponent({ name: 'Trent' })
    submitForm(utils, { name: 'Trevor' })

    expect(localStorage.getItem('name')).toBe('Trevor')
  })
})
