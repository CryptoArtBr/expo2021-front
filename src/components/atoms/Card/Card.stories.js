import React from 'react'

import { Card } from './Card'

export default {
  title: 'Cabra/Atoms/Card',
  component: Card,
}

const Template = ({ ...args }) => <Card {...args} />

export const Main = Template.bind({})
Main.args = {
  item: {
    title:
      'Nome da Obra mas é longo bem pra poder ter varias linhas, mas a gente corta na segunda',
    image: './doge.jpg',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam imperdiet magna in iaculis aliquam. Nullam aliquet dolor sit amet diam ultricies laoreet. Integer non hendrerit risus. Suspendisse posuere vel purus tempor interdum. Quisque sagittis ipsum consequat nulla cursus aliquam. Cras eleifend tempor pellentesque. Aliquam pulvinar condimentum hendrerit.',
  },
  autor: {
    url: '/',
    title: 'Carlos',
  },
}

export const NoAutor = Template.bind({})
NoAutor.args = {
  item: {
    title:
      'Nome da Obra mas é longo bem pra poder ter varias linhas, mas a gente corta na segunda',
    image: './doge.jpg',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam imperdiet magna in iaculis aliquam. Nullam aliquet dolor sit amet diam ultricies laoreet. Integer non hendrerit risus. Suspendisse posuere vel purus tempor interdum. Quisque sagittis ipsum consequat nulla cursus aliquam. Cras eleifend tempor pellentesque. Aliquam pulvinar condimentum hendrerit.',
  },
}

export const NoDescription = Template.bind({})
NoDescription.args = {
  item: {
    title: 'Nome da Obra',
    image: './doge.jpg',
  },
}

export const NoTitle = Template.bind({})
NoTitle.args = {
  item: {
    image: './doge.jpg',
  },
}
