import Home from "./Home";
import { Navigation } from "./Navigation";
import { BrowserRouter as Rounter, Routes, Route } from 'react-router-dom';
import './App.css'
import { NewUser } from "./NewUser";
 const App = () => {

  return (
    <div className="App">
      <Rounter>
        <Navigation />
        <Routes>
          <Route path="/">
              <Route index element={<Home />} />
              <Route path="new-user" element={<NewUser />} />
          </Route>
        </Routes>
      </Rounter>
    </div>
  );
}

export default App;