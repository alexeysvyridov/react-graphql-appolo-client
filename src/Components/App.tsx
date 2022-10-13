import Home from "./Home";
import { Navigation } from "./Navigation";
import { Routes, Route, useLocation } from 'react-router-dom';
import './App.css'
import { NewUser } from "./NewUser";
import { Login } from "../pages/Login";

 const App = () => {
  const location = useLocation();
  const hideNavigation = ['/login', '/register'].includes(location.pathname);

  return (
    <div className="App">
      {!hideNavigation && <Navigation />}
      <Routes>
        <Route path="/">
            <Route index element={<Home />} />
            <Route path="new-user" element={<NewUser />} />
        </Route>
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;