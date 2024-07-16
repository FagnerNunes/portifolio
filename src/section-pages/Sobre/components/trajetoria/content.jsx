import React from 'react';

import {
    ContentTrajetoria,
    ConteudoDoAno,
    Circle,
    Card
} from './styled';

import { IoMdArrowDropright } from "react-icons/io";

function Conteudo({ linhaDoTempo }) {

    return (
        <ContentTrajetoria>

            <ConteudoDoAno>

                <Circle>{linhaDoTempo.ano}</Circle>

                <Card>

                    {
                        linhaDoTempo?.conteudo.map((infos, index) => {
                            return (
                                <div key={index} className="infos">
                                    <div className='data'>
                                        <IoMdArrowDropright fontSize={30} color='#FFB74B' />
                                        <p>{infos.data}</p>
                                    </div>

                                    <p className="descricao">{infos.descricao}</p>
                                </div>
                            )

                        })
                    }

                </Card>

            </ConteudoDoAno>

        </ContentTrajetoria>
    )
}

export default Conteudo