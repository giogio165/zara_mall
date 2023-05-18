import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import { Route, Routes } from "react-router-dom";
import Detail from "./Page/Detail";
import Login from "./Page/Login";
import ProductAll from "./Page/ProductAll";
import NavBar from "./Component/NavBar";
import { useState } from "react";
import PrivateRoute from "./Route/PrivateRoute";

function App() {
  const [login, setLogin] = useState(false);

  return (
    <div>
      <NavBar login={login} setLogin={setLogin} />
      <Routes>
        <Route path="/" element={<ProductAll />} />
        <Route path="/detail" element={<Detail />} />
        <Route path="/login" element={<Login setLogin={setLogin} />} />
        <Route path="/product/:id" element={<PrivateRoute login={login} />} />
      </Routes>
    </div>
  );
}

export default App;
