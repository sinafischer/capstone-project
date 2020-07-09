import React from 'react'
import ActivityListItem from '../components/ActivityListItem'
import GlobalStyle from '../GlobalStyle'
import { addDecorator } from '@storybook/react'
import ShowMoreText from 'react-show-more-text'
import styled from 'styled-components'

export default {
  component: ActivityListItem,
  title: 'ActivityListItem',
}

addDecorator(s => (
  <>
    <GlobalStyle />
    {s()}
  </>
))

export const teaser = () => (
  <li>
    <DivisionLine />
    <h3>Activity Name</h3>
    <ShowMoreText lines={1} more="More" less="Less" expanded={false}>
      <p>
        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
        eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
        voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet
        clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit
        amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
        nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
        sed diam voluptua. At vero eos et accusam et justo duo dolores et ea
        rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem
        ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing
        elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna
        aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo
        dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus
        est Lorem ipsum dolor sit amet.
      </p>
    </ShowMoreText>
  </li>
)
const DivisionLine = styled.div`
  background-color: var(--primary);
  max-width: 100%;
  height: 1px;
  margin: 50px 0;
`
