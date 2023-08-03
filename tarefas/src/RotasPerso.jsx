import React, { useState } from "react";
import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import Beneficios from "./screens/Beneficios";
import Version from "./screens/Version";
import NotFoud from "./screens/NotFoud";
import Navbar from "./components/Navbar";

export default function MinhasRotas() {
  const [tema, setTema] = useState('black');
  const [cor, setCor] = useState('white');

  return (
    <BrowserRouter>
    <Navbar  tema={tema} cor={cor} setTema={setTema} setCor={setCor}/>
      <Routes>
        <Route
          path="/"
          element={
            <Beneficios
              tema={tema}
              cor={cor}
              setTema={setTema}
              setCor={setCor}
            />
          }
        />
        <Route
          path="/version"
          element={
            <Version tema={tema} cor={cor} setTema={setTema} setCor={setCor} />
          }
        />
        <Route
          path="/*"
          element={
            <NotFoud tema={tema} cor={cor} setTema={setTema} setCor={setCor} />
          }
        />
      </Routes>
    </BrowserRouter>
  );
}
