import React from "react";
import { Meta, Story } from "@storybook/react";
import { Button, ButtonProps } from "components/common";


const meta: Meta = {
  title: 'Components/Button',
  component: Button,
  argTypes: {
    onClick:{
      action: 'Clicked'
    },
    children: {
      defaultValue: 'Default Text'
    }
  }
}

export default meta;

const Template: Story<ButtonProps> = (args) => <Button {...args} />

export const Default = Template.bind({});
export const Secondary = Template.bind({});
export const Success = Template.bind({});
export const Danger = Template.bind({});

Default.args = {
  color: 'primary',
}
Secondary.args = {
  color: 'secondary'
}
Success.args = {
  color: 'success',
}
Danger.args = {
  color: 'danger',
}
