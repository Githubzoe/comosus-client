import React from 'react';
import styled from 'styled-components';
import Button from '../next-template/components/Button';
import Link from 'next/link';
import { useForm, SubmitHandler } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

interface IFormInputs {
  name: string;
  email: string;
  password: string;
}

const schema = yup.object().shape({
  name: yup.string().required('Please enter a username'),
  email: yup.string().email().required('Please enter your email'),
  password: yup.string().min(4).max(15).required('Please enter a password'),
});

export default function SignupForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInputs>({
    resolver: yupResolver(schema),
  });
  console.log(errors);

  const onSubmit = (data: IFormInputs) => {
    console.log(data);
  };

  return (
    <MainContainer>
      <Title>
        Create an account for free
        <SubTitle>Free forever. No Payment needed</SubTitle>
      </Title>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <InputContainer>
          <Input
            type="text"
            placeholder="Username"
            {...register('name', {
              minLength: {
                value: 4,
                message: 'Min length is 4',
              },
            })}
          />
          <Paragraph>{errors.name?.message}</Paragraph>
          <Input
            type="email"
            placeholder="Email address"
            {...register('email')}
          />
          <Paragraph>{errors.email?.message}</Paragraph>
          <Input
            type="password"
            placeholder="Create Password"
            {...register('password', {
              minLength: {
                value: 6,
                message: 'Min length is 6',
              },
            })}
          />
          <Paragraph>{errors.password?.message}</Paragraph>
        </InputContainer>
        <Conditions>
          <Term>
            <input type="checkbox" />
          </Term>
          <TermContainer>
            <Policy>
              By Creating an account you are agreeing our Terms and Conditions.
            </Policy>
            View our Privacy Notice to see how we manage your personal
            information
          </TermContainer>
        </Conditions>
        <ButtonContainer>
          <Button content="Sign up with email" />
        </ButtonContainer>
        <HorizontalRule />
      </Form>
      <AlreadyHaveAccount>
        <Link href="/login" passHref>
          Already have an account?
        </Link>
      </AlreadyHaveAccount>
    </MainContainer>
  );
}

const MainContainer = styled.div`
  max-width: 640px;
  margin: 0px auto;
  height: auto;
  margin-bottom: 80px;
`;

const Title = styled.div`
  margin: 0 0 3rem 0;
  font-size: 2.2rem;
  font-weight: 200;
  color: #fff;
`;

const Paragraph = styled.p`
  color: #f6486c;
`;
const SubTitle = styled.div`
  padding-top: 1rem;
  font-size: 1rem;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  height: 20%;
  width: 100%;
  color: #fff;
`;

const InputContainer = styled.div`
  display: grid;
  gap: 12px;
  padding-bottom: 28px;
`;

const Input = styled.input`
  background: #f5f6f8;
  border-radius: 0.7rem;
  height: 3rem;
  padding: 1rem;
  border: none;
  outline: none;
  margin-bottom: 12px;
  &:focus {
    display: inline-block;
    box-shadow: 0 0 0 0.14rem #000;
    backdrop-filter: blur(12rem);
    border-radius: 0.7rem;
  }
`;

const ButtonContainer = styled.div`
  margin: 3rem 0 0 0;
  width: 100%
  display: flex;
  align-items:center;
  justify-content:center;
`;

const Conditions = styled.div`
  font-weight: lighter;
  font-size: 0.9rem;
  display: inline-block;
  color: #fff;
  display: flex;
  width: 100%;
  padding-bottom: 12p;
`;

const TermContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-buttom: 10px;
`;

const Privacy = styled.div`
  text-decoration: underline;
  display: inline-block;
  margin-top: 1rem;
  color: #fff;
`;

const Policy = styled.div`
  padding-bottom: 12px;
`;

const Term = styled.div`
  padding-right: 10px;
`;

const HorizontalRule = styled.hr`
  border-radius: 0.8rem;
  margin: 1.5rem 0 1rem 0;
  background: #d8dce4;
`;

const AlreadyHaveAccount = styled.div`
  cursor: pointer;
  font-weight: lighter;
  font-size: 14px;
  color: #fff;
  line-height: 1.6;
  text-align: center;
  width: 100%;
  display: block
  &:hover {
    text-decoration: underline;
  }
`;
