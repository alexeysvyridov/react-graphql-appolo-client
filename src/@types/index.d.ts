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
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}