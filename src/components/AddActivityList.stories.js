import React from 'react'
import AddActivityForm from './AddActivityForm'
import GlobalStyle from '../GlobalStyle'
import { addDecorator } from '@storybook/react'

export default {
  title: 'AddActivityForm',
  component: AddActivityForm,
}

export const FormDefault = () => <AddActivityForm />
