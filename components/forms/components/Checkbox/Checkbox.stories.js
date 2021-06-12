import React from 'react'

import { Checkbox } from './Checkbox'

export default {
  title: 'Cabra/Componentes/Forms/Componentes/Checkbox',
  component: Checkbox,
}

const Template = ({ ...args }) => <Checkbox {...args} />

export const Primary = Template.bind({})
Primary.args = {
  label: 'label',
}
