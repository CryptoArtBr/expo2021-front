import React from 'react';

import UserBox from './UserBox';

export default {
  title: 'Cabra/Componentes/UserBox',
  component: UserBox
};

const Template = ({args}) => <UserBox {...args} />;

export const Closed = Template.bind({});
Closed.args = {
  open: false
}

export const Open = Template.bind({});
Open.args = {
  open: true
}

