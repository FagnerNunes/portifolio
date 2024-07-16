import React from 'react';
import bgSobre from '../../assets/background/bg-sobre.jpg'
import { SectionPrincipal, Overlay } from '../../components/Sections/Section';
import { ContentSobre } from './styled';

import { Title } from '../../components/Sections/Section';

import Trajetoria from './components/trajetoria';

function Sobre() {
    return (
        <SectionPrincipal bgImage={bgSobre}>

            <Overlay bg="rgba(0, 0, 0, .5)" />

            <ContentSobre>

                <div className="sobre-mim">
                    <Title>Sobre mim</Title>
                    <p>Sou um intusiasta da tecnologia, iniciei meus estudos de forma autônoma em outubro de 2021 e gostei  já de cara nos primeiros códigos html. Desde então venho estudando para aperfeiçoar cada vez mais meus conhecimentos como desenvolvedor. Possuo experiência de forma autônoma e estou em busca do meu primeiro emprego na área de TI.</p>
                </div>

                <Trajetoria />

            </ContentSobre>

        </SectionPrincipal>
    )
}

export default Sobre