import React from 'react';

import Logo from './Logo';

export default {
  title: 'Cabra/Componentes/Logo',
  component: Logo
};

const Template = ({...args}) => <Logo {...args} />;

export const Main = Template.bind({});
Main.args = {
  href: "/"
};
