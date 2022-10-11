import React, { useState } from 'react';
import {
  Button,
  Input,
  PageLayout,
  Spinner
} from 'components/common';
import styled from 'styled-components';
import { ThemeProps } from 'components/themes';

interface AppThemeProps {
  theme: ThemeProps
}

const Form = styled.form`
  width: 100%;
  max-width: 400px;
  background: ${({ theme }: AppThemeProps) => theme.whiteColor};
  border: 1px solid ${({ theme }: AppThemeProps) => theme.lightGray};
  padding: 16px;
  box-sizing: border-box;
  color: ${({ theme }: AppThemeProps) => theme.blackColor};
  border-radius: 4px;
  margin-top: 20px;

  .alt-text {
    text-align: center;
    margin-top: 10px;
  }
  ${Button}:first-of-type, ${Input} {
    margin-top: 20px;
  }
`;
const LoginPage = () => {
  const [formFields, setFormFields] = useState({
    username: '',
    password: '',
  });

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.persist();
    setFormFields((text) => ({
      ...text,
      [e.target.name]: e.target.value,
    }));
  };

  const submitForm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(formFields);
  };

  return (
    <PageLayout>
      <Spinner />
      <h1>Login</h1>
      <Form onSubmit={submitForm}>
        <Input
          name="username"
          placeholder="Username"
          onChange={onChange}
          value={formFields.username}
        />
        <Input
          name="password"
          placeholder="Password"
          onChange={onChange}
          value={formFields.password}
        />
        {/* <PasswordInput
          name="password"
          onChange={onChange}
          value={formFields.password}
        /> */}
        <Button color='primary'>
          Sign in
        </Button>
        <div className='alt-text'>
          or
        </div>
        <Button color='secondary' size='small'>
          Sign up
        </Button>
      </Form>
    </PageLayout>
  );
};

export default LoginPage;
