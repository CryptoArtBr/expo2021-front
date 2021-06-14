import React from 'react'

import { Input } from './Input'

export default {
  title: 'Cabra/Componentes/Forms/Componentes/Input',
  component: Input,
}

const Template = ({ ...args }) => <Input {...args} />

export const Empty = Template.bind({})
Empty.args = {
  label: 'label',
  placeholder: 'aqui vai alguma coisa',
  error: false,
}

export const WithText = Template.bind({})
WithText.args = {
  label: 'label',
  placeholder: 'aqui vai alguma coisa',
  value: 'aqui já tem alguma coisa',
}

export const WithError = Template.bind({})
WithError.args = {
  label: 'label',
  placeholder: 'aqui vai alguma coisa',
  error: true,
}
