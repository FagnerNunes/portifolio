import React from 'react';

import { CardsProject, Conteudo, ContainerTecnologias } from './styled';

import { project_cards as conteudo } from './project-cards';

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
                            </Conteudo>
                        </CardsProject>
                    )
                })
            }
        </>
    );
}

export default Cards;