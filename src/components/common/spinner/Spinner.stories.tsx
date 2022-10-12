import React from "react";
import { Meta, Story } from "@storybook/react";
import { Spinner } from "components/common";


const meta: Meta = {
  title: 'Components/Spinner',
  component: Spinner
}

export default meta;

const Template: Story = (args) => <Spinner {...args} />

export const LoadingSpinner = Template.bind({});
