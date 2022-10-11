import React, { ReactNode } from 'react';
import styled from 'styled-components';
import { Header } from 'components/common';

interface Props {
  children: ReactNode;
}

const Container = styled.main<Props>`
  max-width: 800px;
  margin: 80px auto 0 auto;
  padding: 0 16px;
  box-sizing: border-box;
  font-family: 'Open Sans';
`;

const PageLayout: React.FC<Props> = ({ children, ...props }) => {
  return (
    <>
      <Header />
      <Container>{children}</Container>
    </>
  );
};

export { PageLayout };
