import React from 'react';

import CryptoLink from './CryptoLink';

export default {
  title: 'Cabra/Componentes/CryptoLink',
  component: CryptoLink
};

const Template = ({...args}) => <CryptoLink {...args} />;

export const Main = Template.bind({});
Main.args = {
  url: '/',
  title: 'Carlos'
};
