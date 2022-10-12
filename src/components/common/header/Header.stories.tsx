import React from "react";
import { Meta, Story } from "@storybook/react";
import { Header } from "components/common";


const meta: Meta = {
  title: 'Components/Header',
  component: Header,
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

const Template: Story = (args) => <Header />

export const HeaderComponent = Template.bind({});
