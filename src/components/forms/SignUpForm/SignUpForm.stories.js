import React from 'react'

import { SignUpForm } from './SignUpForm'

export default {
  title: 'Cabra/Forms/SignUpForm',
  component: SignUpForm,
}

const Template = ({ innerText, label, ...args }) => <SignUpForm />

export const Primary = Template.bind({})
