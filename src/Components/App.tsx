import Home from "./Home";
import { Navigation } from "./Navigation";
import { Routes, Route, useLocation } from 'react-router-dom';
import './App.css'
import { NewUser } from "./NewUser";
import { Login } from "../pages/Login";
import { Register } from "../pages/Register";
import { AuthProvider } from "../context";

 const App = () => {
  const location = useLocation();
  const hideNavigation = ['/login', '/register'].includes(location.pathname);

  return (
    <AuthProvider>
      <div className="App">
        {!hideNavigation && <Navigation />}
        <Routes>
          <Route path="/">
              <Route index element={<Home />} />
              <Route path="new-user" element={<NewUser />} />
          </Route>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </div>
    </AuthProvider>
  );
}

export default App;