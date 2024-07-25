import React, { useEffect, useRef, useState, useCallback } from "react"

import Navbar from "./components/Navbar/Navbar"
import { MainContainer } from "./components/Container/MainContainer"

import Home from "./section-pages/Home/index"
import Sobre from "./section-pages/Sobre"
import Habilidades from "./section-pages/Habilidades"
import Projetos from "./section-pages/Projetos"
import Contato from "./section-pages/Contato"

function Main() {
    const [currentIndex, setCurrentIndex] = useState(0)
    const mainContainerRef = useRef(null)
    const [isScrolling, setIsScrolling] = useState(false)

    const sections = [
        <Home />,
        <Sobre />,
        <Habilidades />,
        <Projetos />,
        <Contato />
    ]

    const handleWheel = useCallback((e) => {
        if (!e.isTrusted || isScrolling) return

        setIsScrolling(true)
        setTimeout(() => setIsScrolling(false), 700)

        if (e.deltaY > 0 && currentIndex < sections.length - 1) {
            setCurrentIndex(prev => prev + 1)
        } else if (e.deltaY < 0 && currentIndex > 0) {
            setCurrentIndex(prev => prev - 1)
        }
    }, [currentIndex, sections.length, isScrolling])

    useEffect(() => {
        window.addEventListener('wheel', handleWheel)

        return () => {
            window.removeEventListener('wheel', handleWheel)
        }
    }, [handleWheel])

    useEffect(() => {
        if (mainContainerRef.current) {
            const container = mainContainerRef.current
            const targetSection = container.children[currentIndex]
            const targetPosition = targetSection.offsetLeft

            if (container.scrollLeft !== targetPosition) {
                container.scrollTo({
                    left: targetPosition,
                    behavior: 'smooth',
                })
            }
        }
    }, [currentIndex])

    return (
        <>
            <Navbar indicePage={currentIndex} />
            <MainContainer ref={mainContainerRef}>
                {sections}
            </MainContainer>
        </>
    )
}

export default Main
