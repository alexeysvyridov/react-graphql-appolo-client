import React from 'react'
import { ErrorMessage } from '../../Components/shared/Container'
import { Button, FormContainer, InputBox, InputLabel, InputText, FormBox, Title } from '../../Components/shared/styled'
import {useFormik} from "formik";
import { LoginUserSchema } from '../../formik/validation';
import { useMutation } from '@apollo/client';
import { AUTH } from '../../graphql';
import CircularIndeterminate from '../../Components/shared/Spinner';
import { setValueToLocalStorage } from '../../helpers';
import { useNavigate } from 'react-router-dom'
export const Login = () => {
  const navigate = useNavigate()
  const [login, { loading, error } ]= useMutation<LoginResponse>(AUTH, {
    onCompleted: (response) => {
      setValueToLocalStorage('user', response.login.user)
      setValueToLocalStorage('token', response.login.token)
      navigate("/")
      console.log('Successfully completed!')
    }
  });

  const formik = useFormik({
    validationSchema: LoginUserSchema,
    initialValues: {
      email: '',
      password: '',
    }, onSubmit: (data) => {
      console.log('data', data);
      login({
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
