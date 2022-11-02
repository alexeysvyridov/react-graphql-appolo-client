import * as Yup from 'yup';

const CreateUserSchema = Yup.object().shape({
  firstName: Yup.string()
    .min(4, 'To Short')
    .required('First name is Required!'),

  lastName: Yup.string()
  .min(4, 'To Short')
  .required('First name is Required!'),
  email: Yup.string().email('Invalid email').required('Email is required'),
  password: Yup.string().min(8, 'To short password').required('Password is required'),
});

const LoginUserSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email').required('Email is required'),
  password: Yup.string().min(8, 'To short password').required('Password is required'),
});

const RegisterUserSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email').required('Email is required'),
  firstName: Yup.string().required("firstName is required!"),
  lastName: Yup.string().required("lastName is required!"),
  password: Yup.string().min(8, 'To short password').required('Password is required'),
})

export {
  CreateUserSchema,
  LoginUserSchema,
  RegisterUserSchema,
}