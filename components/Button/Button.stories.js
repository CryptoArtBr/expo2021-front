import React from 'react';

import Button, {NavButton} from './Button';

export default {
  title: 'Cabra/Componentes/Button',
  component: Button
};

const Template = ({label, ...args}) => <Button {...args}>{label}</Button>;

export const Primary = Template.bind({});
Primary.args = {
  label: 'Button',
};

export const Secondary = Template.bind({});
Secondary.args = {
  label: 'Button',
  type: 'secondary'
};


export const Nav = Template.bind({})
Nav.args = {
  type: 'nav',
  label: 'h'
}