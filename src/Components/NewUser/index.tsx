import React from 'react'
import { Container, ErrorMessage } from '../shared/Container'
import { Button, FormContainer, InputBox, InputLabel, InputText } from './styled'
import {useFormik} from 'formik';
import { CreateUserSchema } from '../../formik/validation';
import { useMutation } from '@apollo/client';
import { CREATE_USER } from '../../graphql';

export const NewUser = () => {
  const [createUser, { loading, error } ]= useMutation(CREATE_USER);
  const formik = useFormik({
    validationSchema: CreateUserSchema,
    initialValues: {
      firstName: '',
      lastName: '',
      email: '',
      password: ''
    }, onSubmit: (data) => {
      console.log('data', data);
      createUser({
        variables: {
            ...data
        }
      })
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
    <Container>
      <FormContainer onSubmit={handleSubmit}>
        <InputBox direction="column">
          <InputLabel>first name</InputLabel>
          <InputText
            id="firstName"
            placeholder="First name"
            value={values.firstName}
            onChange={handleChange}
            onBlur={handleBlur}
          />
            {errors.firstName && touched.firstName && <ErrorMessage>{errors.firstName}</ErrorMessage>}
        </InputBox>
        <InputBox direction="column">
          <InputLabel>last name</InputLabel>
          <InputText 
            id="lastName"
            placeholder="Last name"
            value={values.lastName}
            onChange={handleChange}
            onBlur={handleBlur}
          />
           {errors.lastName && touched.lastName && <ErrorMessage>{errors.lastName}</ErrorMessage>}
        </InputBox>
        <InputBox direction="column">
          <InputLabel>email</InputLabel>
          <InputText 
              id="email"
              placeholder="Email"
              type="email"
              value={values.email}
              onChange={handleChange}
              onBlur={handleBlur}
          />
          {errors.email && touched.email && <ErrorMessage>{errors.email}</ErrorMessage>}
        </InputBox>
        <InputBox direction="column">
          <InputLabel>password</InputLabel>
          <InputText 
              id="password"
              placeholder="password"
              type="password"
              value={values.password}
              onChange={handleChange}
              onBlur={handleBlur}
          />
          {errors.password && touched.password && <ErrorMessage>{errors.password}</ErrorMessage>}
        </InputBox>
        <Button type="submit"/>
        {/* <button type="submit">handleSubmit</button> */}
      </FormContainer>
      {error && <ErrorMessage>{error?.message}</ErrorMessage>}
    </Container>
  )
}
