import React, { useEffect, useRef, useState, useCallback } from "react";

import Navbar from "./components/Navbar/Navbar";
import { MainContainer } from "./components/Container/MainContainer";

import Home from "./section-pages/Home/index";
import Sobre from "./section-pages/Sobre";
import Habilidades from "./section-pages/Habilidades";
import Projetos from "./section-pages/Projetos";
import Contato from "./section-pages/Contato";

function Main() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const mainContainerRef = useRef(null);
    const [isScrolling, setIsScrolling] = useState(false);

    const sections = [
        <Home key="home"/>,
        <Sobre key="sobre"/>,
        <Habilidades key="habilidades"/>,
        <Projetos key="projetos"/>,
        <Contato key="contato"/>,
    ];

    const handleWheel = useCallback(
        (e) => {
            if (!e.isTrusted || isScrolling) return;

            setIsScrolling(true);
            setTimeout(() => setIsScrolling(false), 600);

            if (e.deltaY > 0 && currentIndex < sections.length - 1) {
                setCurrentIndex((prev) => prev + 1);
            } else if (e.deltaY < 0 && currentIndex > 0) {
                setCurrentIndex((prev) => prev - 1);
            }
        },
        [currentIndex, sections.length, isScrolling]
    );

    useEffect(() => {
        if (window.innerWidth < 1024) {
            return;
        }

        window.addEventListener("wheel", handleWheel);

        return () => {
            window.removeEventListener("wheel", handleWheel);
        };
    }, [handleWheel]);

    useEffect(() => {
        if (mainContainerRef.current) {
            const container = mainContainerRef.current;
            const targetSection = container.children[currentIndex];

            if (targetSection && window.innerWidth >= 1024) {
                const targetPosition = targetSection.offsetLeft ?? 0;

                return container.scrollTo({
                    left: targetPosition,
                    behavior: "smooth",
                });
            }

            if (targetSection) {
                const targetPosition = targetSection.offsetTop ?? 0;

                container.scrollTo({
                    top: targetPosition - 80,
                    behavior: "smooth",
                });
            }
        }
    }, [currentIndex]);

    return (
        <>
            <Navbar indicePage={currentIndex} setIndexMenu={setCurrentIndex} />
            <MainContainer ref={mainContainerRef}>{sections}</MainContainer>
        </>
    );
}

export default Main;
