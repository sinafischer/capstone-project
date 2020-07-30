import React from 'react'
import AddActivityForm from './AddActivityForm'
import { storiesOf } from '@storybook/react'
import { linkTo } from '@storybook/addon-links'
import StoryRouter from 'storybook-react-router'

export default {
  title: 'AddActivityForm',
  component: AddActivityForm,
}

storiesOf('AddActivityForm', module)
  .addDecorator(
    StoryRouter({
      '/': linkTo('LinkedStories', 'ActivityPage'),
    })
  )
  .add('AddActivityForm', () => <AddActivityForm />)
