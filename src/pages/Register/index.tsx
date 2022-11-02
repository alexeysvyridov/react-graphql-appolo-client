import React from 'react'
import { ErrorMessage } from '../../Components/shared/Container'
import { Button, FormContainer, InputBox, InputLabel, InputText, FormBox, Title } from '../../Components/shared/styled'
import {useFormik} from "formik";
import { LoginUserSchema, RegisterUserSchema } from '../../formik/validation';
import { useMutation } from '@apollo/client';
import { CREATE_USER, SIGNUP } from '../../graphql';
import CircularIndeterminate from '../../Components/shared/Spinner';

export const Register = () => {
  // to do change
  const [registerUser, { loading, error } ]= useMutation<CreateUser>(SIGNUP, {
    onCompleted: () => {
      console.log('Successfully registred completed!')
    }
  });
  const formik = useFormik({
    validationSchema: RegisterUserSchema,
    initialValues: {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
    }, onSubmit: (data) => {
      console.log('data', data);
      registerUser({
        variables: {
          ...data
        }
      });
    }
  });
  const {
    handleSubmit,
    values,
    handleChange,
    errors,
    touched,
    handleBlur
  } = formik;

  return (
    <FormBox>
      <FormContainer onSubmit={handleSubmit}>
        <Title>Register</Title>
        <InputBox direction="column">
          <InputLabel>First name</InputLabel>
          <InputText 
              id="firstName"
              placeholder="firstName"
              value={values.firstName}
              onChange={handleChange}
          />
          {errors.firstName && touched.firstName && <ErrorMessage>{errors.firstName}</ErrorMessage>}
        </InputBox>
        <InputBox direction="column">
          <InputLabel>Last name</InputLabel>
          <InputText 
              id="lastName"
              placeholder="lastName"
              value={values.lastName}
              onChange={handleChange}
          />
          {errors.lastName && touched.lastName && <ErrorMessage>{errors.lastName}</ErrorMessage>}
        </InputBox>
        <InputBox direction="column">
          <InputLabel>Email</InputLabel>
          <InputText 
              id="email"
              placeholder="Email"
              type="email"
              value={values.email}
              onChange={handleChange}
          />
          {errors.email && touched.email && <ErrorMessage>{errors.email}</ErrorMessage>}
        </InputBox>
        <InputBox direction="column">
          <InputLabel>Password</InputLabel>
          <InputText 
              id="password"
              placeholder="password"
              type="password"
              value={values.password}
              onChange={handleChange}
          />
          {errors.password && touched.password && <ErrorMessage>{errors.password}</ErrorMessage>}
        </InputBox>
        <Button type="submit"/>
        {/* <button type="submit">handleSubmit</button> */}
      </FormContainer>
      {error && <ErrorMessage>{error?.message}</ErrorMessage>}
     {loading && <CircularIndeterminate
        style={ {
          width: '100%',
          justifyContent: 'center',
          paddingTop: '50px',
        }}
        color="primary"  
      />  }
    </FormBox>
  )
}
