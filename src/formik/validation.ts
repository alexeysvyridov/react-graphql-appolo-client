import * as Yup from 'yup';

const CreateUserSchema = Yup.object().shape({
  firstName: Yup.string()
    .min(4, 'To Short')
    .required('First name is Required!'),

  lastName: Yup.string()
  .min(4, 'To Short')
  .required('First name is Required!'),
  email: Yup.string().email('Invalid email').required('Email is equired'),
  password: Yup.string().min(8, 'To short password').required('Password is equired'),
})

export {
  CreateUserSchema,
}