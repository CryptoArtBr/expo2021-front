import React from 'react'

import { GaleriaHorizontal } from './GaleriaHorizontal'

export default {
  title: 'Cabra/Molecules/GaleriaHorizontal',
  component: GaleriaHorizontal,
}

const Template = ({ ...args }) => <GaleriaHorizontal {...args} />

export const Main = Template.bind({})
Main.args = {
  obras: [
    {
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam imperdiet magna in iaculis aliquam. Nullam aliquet dolor sit amet diam ultricies laoreet. Integer non hendrerit risus. Suspendisse posuere vel purus tempor interdum. Quisque sagittis ipsum consequat nulla cursus aliquam. Cras eleifend tempor pellentesque. Aliquam pulvinar condimentum hendrerit.',
      description_title: 'Sobre',
      title: 'DOGE to the moon',
      image: './doge.jpg',
    },
    {
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam imperdiet magna in iaculis aliquam. Nullam aliquet dolor sit amet diam ultricies laoreet. Integer non hendrerit risus. Suspendisse posuere vel purus tempor interdum. Quisque sagittis ipsum consequat nulla cursus aliquam. Cras eleifend tempor pellentesque. Aliquam pulvinar condimentum hendrerit.',
      description_title: 'Sobre',
      title: 'Obra imagem quebrada ',
      image: '/doge.jpg',
    },
    {
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam imperdiet magna in iaculis aliquam. Nullam aliquet dolor sit amet diam ultricies laoreet. Integer non hendrerit risus. Suspendisse posuere vel purus tempor interdum. Quisque sagittis ipsum consequat nulla cursus aliquam. Cras eleifend tempor pellentesque. Aliquam pulvinar condimentum hendrerit.',
      description_title: 'Sobre',
      title: 'Nome da Rosa',
      image: './doge.jpg',
    },
    {
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam imperdiet magna in iaculis aliquam. Nullam aliquet dolor sit amet diam ultricies laoreet. Integer non hendrerit risus. Suspendisse posuere vel purus tempor interdum. Quisque sagittis ipsum consequat nulla cursus aliquam. Cras eleifend tempor pellentesque. Aliquam pulvinar condimentum hendrerit.',
      description_title: 'Sobre',
      title: 'Onome',
      image: './doge.jpg',
    },
  ],
}
