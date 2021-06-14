import React from 'react'

import { InfoBox } from './InfoBox'

export default {
  title: 'Cabra/Molecules/InfoBox',
  component: InfoBox,
}

const Template = ({ ...args }) => <InfoBox {...args} />

export const Main = Template.bind({})
Main.args = {
  autorName: 'Malungo',
  links: [
    {
      url: '/',
      title: 'artists page',
    },
    {
      url: '/',
      title: 'hic et nunc',
    },
    {
      url: '/',
      title: 'opensea',
    },
  ],
  bio:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam imperdiet magna in iaculis aliquam. Nullam aliquet dolor sit amet diam ultricies laoreet. Integer non hendrerit risus. Suspendisse posuere vel purus tempor interdum. Quisque sagittis ipsum consequat nulla cursus aliquam. Cras eleifend tempor pellentesque. Aliquam pulvinar condimentum hendrerit.',
}
