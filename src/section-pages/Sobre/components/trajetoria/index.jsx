import React from "react";

import { ConteudoDoAno, Circle, Card } from "./styled";

import { IoMdArrowDropright } from "react-icons/io";

import { linhaDoTempo } from "./linhaDoTempo";

function Trajetoria() {
    return (
        <>
            {linhaDoTempo?.map((obj, index) => (
                <ConteudoDoAno key={index} className="container-trajetoria">
                    <Circle>{obj.ano}</Circle>

                    <Card>
                        {obj?.conteudo.map((infos, infosIndex) => (
                            <div key={infosIndex} className="infos">
                                <div className="data">
                                    <IoMdArrowDropright
                                        fontSize={30}
                                        color="#FFB74B"
                                    />
                                    <p>{infos.data}</p>
                                </div>

                                <p className="descricao">{infos.descricao}</p>
                            </div>
                        ))}
                    </Card>
                </ConteudoDoAno>
            ))}
        </>
    );
}

export default Trajetoria;
