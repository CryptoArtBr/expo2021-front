import React from 'react'

import { Select, Option } from './Select'

export default {
  title: 'Cabra/Componentes/Forms/Componentes/Select',
  component: Select,
}

const Template = ({ ...args }) => (
  <Select {...args}>
    <Option value="test">option 1</Option>
    <Option value="test">option 2</Option>
    <Option value="test">option 3</Option>
  </Select>
)

export const Primary = Template.bind({})
Primary.args = {}
