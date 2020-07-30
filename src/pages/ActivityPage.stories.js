import React from 'react'
import ActivityPage from './ActivityPage'
import { storiesOf } from '@storybook/react'
import { linkTo } from '@storybook/addon-links'
import StoryRouter from 'storybook-react-router'
import activities from '../activities.json'

export default {
  title: 'ActivityPage',
  component: ActivityPage,
}

storiesOf('ActivityPage', module)
  .addDecorator(
    StoryRouter({
      '/create': linkTo('LinkedStories', 'AddActivityForm'),
    })
  )
  .add('ActivityPage', () => <ActivityPage activities={activities} />)
