import React from "react";
import { Meta, Story } from "@storybook/react";
import { Input } from "components/common";


const meta: Meta = {
  title: 'Components/Input',
  component: Input
}

export default meta;

const Template: Story = (args) => <Input {...args} />

export const InputElement = Template.bind({});
InputElement.args = {
  name: 'username',
  placeHolder: 'Username'
}
