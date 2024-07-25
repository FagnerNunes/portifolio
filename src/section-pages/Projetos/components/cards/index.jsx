import React from 'react';
import { Link } from 'react-router-dom';

import { CardsProject, Conteudo, ContainerTecnologias } from './styled';

import { project_cards as conteudo } from './project-cards';

import { FaExternalLinkAlt } from "react-icons/fa";

const Cards = () => {

    return (
        <>
            {
                conteudo?.map((card, index) => {
                    return (
                        <CardsProject key={index}>
                            <figure>
                                <img src={card.img} alt="Shortly" />

                                <ContainerTecnologias>
                                    {
                                        card?.tecnologias?.map(icon => {
                                            return icon
                                        })
                                    }
                                </ContainerTecnologias>
                            </figure>

                            <Conteudo>
                                <h2>{card.titulo}</h2>
                                <p>{card.descricao}</p>
                                { !!card.link_github.length && <a href={card.link_github} target='_blank'>Acessar no Github <FaExternalLinkAlt fontSize={12} /></a> }
                                { !!card.deploy.length && <a href={card.deploy} target='_blank'>Deploy <FaExternalLinkAlt fontSize={12} /></a> }
                            </Conteudo>
                        
                        </CardsProject>
                    )
                })
            }
        </>
    );
}

export default Cards;