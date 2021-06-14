import React from 'react'

import { Header } from './Header'

export default {
  title: 'Cabra/Organisms/Header',
  component: Header,
}

const Template = ({ ...args }) => <Header {...args} />

export const LoggedOut = Template.bind({})
LoggedOut.args = {
  isAuthenticated: false,
}

export const LoggedIn = Template.bind({})
LoggedIn.args = {
  isAuthenticated: true,
}
