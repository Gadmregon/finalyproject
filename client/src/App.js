//import React, { useState } from "react";

import "./App.css";
import { Route, Routes } from "react-router-dom";
import { Home, Profile, Admin, Register } from "./pages";
import NavBar from "./components/navbar";

function App() {
  // const [show, setShow] = useState(true);

  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </>
  );
}

export default App;
