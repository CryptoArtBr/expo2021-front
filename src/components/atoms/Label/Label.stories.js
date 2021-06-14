import React from 'react'

import { Label } from './Label'

export default {
  title: 'Cabra/Componentes/Forms/Componentes/Label',
  component: Label,
}

const Template = ({ label, htmlFor, ...args }) => (
  <Label htmlFor={htmlFor} {...args}>
    {label}
  </Label>
)

export const Primary = Template.bind({})
Primary.args = {
  label: 'Label',
  htmlFor: 'target',
}
