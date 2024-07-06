import React from "react"
import Navbar from "./components/Navbar/Navbar";
import Home from "./section-pages/Home/index";
import Sobre from "./section-pages/Sobre";

function Main () {
  return (
    <>
        <main>
            
            <Navbar />

            <Home />
            <Sobre />

        </main>
    </>
  );
}

export default Main;