import React from 'react'
import { ErrorMessage } from '../../Components/shared/Container'
import { Button, FormContainer, InputBox, InputLabel, InputText, FormBox, Title } from './styled'
import {useFormik} from "formik";
import { LoginUserSchema } from '../../formik/validation';
import { useMutation } from '@apollo/client';
import { CREATE_USER } from '../../graphql';
import CircularIndeterminate from '../../Components/shared/Spinner';

export const Login = () => {
  // to do change
  const [createUser, { loading, error } ]= useMutation<CreateUser>(CREATE_USER, {
    onCompleted: () => {
      console.log('Successfully completed!')
    }
  });
  const formik = useFormik({
    validationSchema: LoginUserSchema,
    initialValues: {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
    }, onSubmit: (data) => {
      console.log('data', data);
      createUser({
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
        <Title>Login</Title>
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
