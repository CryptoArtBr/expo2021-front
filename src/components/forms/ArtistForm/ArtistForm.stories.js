import React from 'react'

import { ArtistForm } from './ArtistForm'

export default {
  title: 'Cabra/Forms/ArtistForm',
  component: ArtistForm,
}

const Template = ({ innerText, label, ...args }) => <ArtistForm />

export const Primary = Template.bind({})
