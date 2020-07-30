import React from 'react'
import NotFoundPage from './NotFoundPage'
import { storiesOf } from '@storybook/react'
import { linkTo } from '@storybook/addon-links'
import StoryRouter from 'storybook-react-router'

export default {
  title: 'NotFoundPage',
  component: NotFoundPage,
}

storiesOf('NotFoundPage', module)
  .addDecorator(
    StoryRouter({
      'component={NotFound}': linkTo('LinkedStories', 'NotFoundPage'),
    })
  )
  .add('NotFoundPage', () => <NotFoundPage />)
