import React, { useRef, useState } from "react";
import { FaExternalLinkAlt } from "react-icons/fa";
import {
    ContainerCards,
    CardsProject,
    Conteudo,
    ContainerTecnologias,
} from "./styled";
import { project_cards as conteudo } from "./project-cards";

const Cards = () => {
    const ContentCards = useRef(null);
    const [isDragging, setIsDragging] = useState(false);
    const [startX, setStartX] = useState(0);
    const [scrollLeft, setScrollLeft] = useState(0);

    const handleMouseDown = (e) => {
        setIsDragging(true);
        setStartX(e.pageX - ContentCards.current.offsetLeft);
        setScrollLeft(ContentCards.current.scrollLeft);
        ContentCards.current.classList.add('no-transition'); // Adiciona a classe para pausar as transições
    };

    const handleMouseLeave = () => {
        if (isDragging) {
            setIsDragging(false);
            ContentCards.current.classList.remove('no-transition'); // Remove a classe para retomar as transições
        }
    };

    const handleMouseUp = () => {
        if (isDragging) {
            setIsDragging(false);
            ContentCards.current.classList.remove('no-transition'); // Remove a classe para retomar as transições
        }
    };

    const handleMouseMove = (e) => {
        if (!isDragging) return;
        e.preventDefault();
        const x = e.pageX - ContentCards.current.offsetLeft;
        const walk = (x - startX) * 1.5; // Ajuste a velocidade do arrasto conforme necessário
        ContentCards.current.scrollLeft = scrollLeft - walk;
    };

    return (
        <>
            <ContainerCards
                ref={ContentCards}
                onMouseDown={handleMouseDown}
                onMouseLeave={handleMouseLeave}
                onMouseUp={handleMouseUp}
                onMouseMove={handleMouseMove}
            >
                {conteudo?.map((card, index) => (
                    <CardsProject key={index}>
                        <figure>
                            <img src={card.img} alt={card.title} />

                            <ContainerTecnologias>
                                {card?.tecnologias?.map((icon, iconIndex) => (
                                    <span key={iconIndex}>{icon}</span>
                                ))}
                            </ContainerTecnologias>
                        </figure>

                        <Conteudo>
                            <h2>{card.titulo}</h2>
                            <p>{card.descricao}</p>
                            {!!card.link_github.length && (
                                <a href={card.link_github} target="_blank" rel="noopener noreferrer">
                                    Acessar no Github{" "}
                                    <FaExternalLinkAlt fontSize={12} />
                                </a>
                            )}
                            {!!card.deploy.length && (
                                <a href={card.deploy} target="_blank" rel="noopener noreferrer">
                                    Deploy <FaExternalLinkAlt fontSize={12} />
                                </a>
                            )}
                        </Conteudo>
                    </CardsProject>
                ))}
            </ContainerCards>
        </>
    );
};

export default Cards;
