type FilterOptions = {
    value: number;
    name: string;
}

type Country = {
    code: string;
    name: string;
    phone: string;
}
type Countries = {
  countries: Country[]
}

type User = {
  _id: number;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}
type CreateUser = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}

type AuthLogin = {
  email: string;
  password: string;
}