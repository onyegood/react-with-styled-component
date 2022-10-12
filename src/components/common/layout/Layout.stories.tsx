import React from "react";
import { Meta, Story } from "@storybook/react";
import { PageLayout, LayoutProps } from "components/common";


const meta: Meta = {
  title: 'Components/PageLayout',
  component: PageLayout
}

export default meta;

const Template: Story<LayoutProps> = (args) => <PageLayout {...args} />

export const Layout = Template.bind({});
