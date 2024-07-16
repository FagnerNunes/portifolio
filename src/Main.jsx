import React from "react"
import Navbar from "./components/Navbar/Navbar"
import Home from "./section-pages/Home/index"
import Sobre from "./section-pages/Sobre"
import Habilidades from "./section-pages/Habilidades"
import Projetos from "./section-pages/Projetos"

function Main () {
  return (
    <>
        <Navbar />
        <Home />
        <Sobre />
        <Habilidades />
        <Projetos />
    </>
  );
}

export default Main