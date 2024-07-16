import React from 'react';

import Conteudo from './content';

import { linhaDoTempo } from './linhaDoTempo';

function Trajetoria() {

    return (
        <>
            {
                
                linhaDoTempo?.map((obj, index) => {
                    return <Conteudo key={index} linhaDoTempo={obj} />
                })

            }

        </>
    )
}

export default Trajetoria