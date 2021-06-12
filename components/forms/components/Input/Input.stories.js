import React from 'react'

import { Input } from './Input'

export default {
  title: 'Cabra/Componentes/Forms/Componentes/Input',
  component: Input,
}

const Template = ({ ...args }) => <Input {...args} />

export const Primary = Template.bind({})
Primary.args = {
  label: 'label',
}
