import React from 'react'

import { Textarea } from './Textarea'

export default {
  title: 'Cabra/Componentes/Forms/Componentes/Textarea',
  component: Textarea,
}

const Template = ({ innerText, label, ...args }) => (
  <Textarea label={label} {...args}>
    {innerText}
  </Textarea>
)

export const Primary = Template.bind({})
Primary.args = {
  label: 'Textão',
  innerText:
    'this can be a lot of text, but i will write just a little bit. thanks.',
}
