import React from 'react'

import { SignInForm } from './SignInForm'

export default {
  title: 'Cabra/Forms/SignInForm',
  component: SignInForm,
}

const Template = ({ innerText, label, ...args }) => <SignInForm />

export const Primary = Template.bind({})
