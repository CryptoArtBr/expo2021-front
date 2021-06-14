import React from 'react'

import { GaleriaCarrossel } from './GaleriaCarrossel'

export default {
  title: 'Cabra/Molecules/GaleriaCarrossel',
  component: GaleriaCarrossel,
}

const Template = ({ ...args }) => <GaleriaCarrossel {...args} />

export const Main = Template.bind({})
Main.args = {
  items: [
    {
      title:
        'Nome da Obra mas é longo bem pra poder ter varias linhas, mas a gente corta na segunda',
      image: './doge.jpg',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam imperdiet magna in iaculis aliquam. Nullam aliquet dolor sit amet diam ultricies laoreet. Integer non hendrerit risus. Suspendisse posuere vel purus tempor interdum. Quisque sagittis ipsum consequat nulla cursus aliquam. Cras eleifend tempor pellentesque. Aliquam pulvinar condimentum hendrerit.',
      link: {
        url: '/',
        title: 'Página do autor',
      },
    },
    {
      title: 'Bela obra',
      image: './doge.jpg',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam imperdiet magna in iaculis aliquam. Nullam aliquet dolor sit amet diam ultricies laoreet. Integer non hendrerit risus. Suspendisse posuere vel purus tempor interdum. Quisque sagittis ipsum consequat nulla cursus aliquam. Cras eleifend tempor pellentesque. Aliquam pulvinar condimentum hendrerit.',
      link: {
        url: '/',
        title: 'Página do autor',
      },
    },
    {
      title: 'Outra obra',
      image: '',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam imperdiet magna in iaculis aliquam. Nullam aliquet dolor sit amet diam ultricies laoreet. Integer non hendrerit risus. Suspendisse posuere vel purus tempor interdum. Quisque sagittis ipsum consequat nulla cursus aliquam. Cras eleifend tempor pellentesque. Aliquam pulvinar condimentum hendrerit.',
      link: {
        url: '/',
        title: 'Página do autor',
      },
    },
    {
      title: 'Como qualquer outra coisa',
      image: './doge.jpg',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam imperdiet magna in iaculis aliquam. Nullam aliquet dolor sit amet diam ultricies laoreet. Integer non hendrerit risus. Suspendisse posuere vel purus tempor interdum. Quisque sagittis ipsum consequat nulla cursus aliquam. Cras eleifend tempor pellentesque. Aliquam pulvinar condimentum hendrerit.',
      link: {
        url: '/',
        title: 'Página do autor',
      },
    },
    {
      title:
        'Nome da Obra mas é longo bem pra poder ter varias linhas, mas a gente corta na segunda',
      image: './doge.jpg',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam imperdiet magna in iaculis aliquam. Nullam aliquet dolor sit amet diam ultricies laoreet. Integer non hendrerit risus. Suspendisse posuere vel purus tempor interdum. Quisque sagittis ipsum consequat nulla cursus aliquam. Cras eleifend tempor pellentesque. Aliquam pulvinar condimentum hendrerit.',
      link: {
        url: '/',
        title: 'Página do autor',
      },
    },
  ],
}
