import { NavigationStyled, NavigationItem } from './styled';
import {useLocation} from 'react-router-dom';
export const Navigation = () => {
  const location = useLocation();

  const navigations = [
    {
      to: "/",
      label: "Home",
    },
    {
      to: "/new-user",
      label: 'create user'
    }
  ] as const;

  return (
    <NavigationStyled>
      <ul>
        {navigations.map((nav) => {
          return (
            <NavigationItem
              to={nav.to}
              key={nav.to}
              style={{
                color: location.pathname === nav.to ? 'red': '#fff'
              }}
            >
              {nav.label}
            </NavigationItem>
          )
        })}
        <NavigationItem
          style={{
            position: 'absolute',
            top: '20px',
            right: '10px'
          }}
          to="/login" 
          key="login"
        >
          sign out
        </NavigationItem>
      </ul>
    </NavigationStyled>
  )
}
