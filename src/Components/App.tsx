import Home from "./Home";
import { Navigation } from "./Navigation";
import { Routes, Route, useLocation } from 'react-router-dom';
import './App.css'
import { NewUser } from "./NewUser";
import { Login } from "../pages/Login";
import { Register } from "../pages/Register";
import { AuthProvider } from "../context";
import { routeGuard } from "../HOC";

const ProtectedRouteHome = routeGuard(Home);
const ProtectedRouteNewUser = routeGuard(NewUser);

 const App = () => {
  const location = useLocation();
  const hideNavigation = ['/login', '/register'].includes(location.pathname);

  return (
    <AuthProvider>
      <div className="App">
        {!hideNavigation && <Navigation />}
        <Routes>
          <Route path="/" element={<ProtectedRouteHome />} />
          <Route path="/new-user" element={<ProtectedRouteNewUser />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </div>
    </AuthProvider>
  );
}

export default App;