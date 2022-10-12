import React, { ReactNode } from 'react';
import styled from 'styled-components';
import { Header } from 'components/common';

export interface LayoutProps {
  children: ReactNode;
}

export const Container = styled.main<LayoutProps>`
  max-width: 800px;
  margin: 80px auto 0 auto;
  padding: 0 16px;
  box-sizing: border-box;
  font-family: 'Open Sans';
`;

const PageLayout: React.FC<LayoutProps> = ({ children, ...props }) => {
  return (
    <>
      <Header />
      <Container>{children}</Container>
    </>
  );
};

export { PageLayout };
