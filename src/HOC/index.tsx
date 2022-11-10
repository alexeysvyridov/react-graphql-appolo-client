import { FC } from 'react'
import { Navigate } from 'react-router-dom';
import { getValueFromLocalStorage } from '../helpers';
type withAuth = (Component: FC) => FC;
export const routeGuard:withAuth = (Component) => { 
  return function WithWrapper(props) {
    const user = getValueFromLocalStorage<User | null>('user');
    if (!user) {
      return (
        <Navigate to="/login" />
      )
    }
  
    return (
      <Component {...props} />
    )
  }
}