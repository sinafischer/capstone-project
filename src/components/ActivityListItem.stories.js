import React from 'react'
import ActivityListItem from './ActivityListItem'
import GlobalStyle from '../GlobalStyle'

export default {
  component: ActivityListItem,
  title: 'ActivityListItem',
}

export const ToStorybook = () => (
  <>
    <GlobalStyle />
    <ActivityListItem />
  </>
)
ToStorybook.story = {
  name: 'ActivityListItem',
}
