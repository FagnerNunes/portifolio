import React from 'react';
import bgProjetos from '../../assets/background/bg-projetos.jpg';

import { SectionPrincipal, Overlay, Title } from '../../components/Sections/Section';

import { ContentProjects } from './styled';

import Cards from './components/cards';

const Projetos = () => {

    return (
        <>
            <SectionPrincipal bg_image={bgProjetos}>

            <Overlay bg="rgba(0, 0, 0, .5)" />

            <ContentProjects>

                <Title>Projetos</Title>

                <Cards />

            </ContentProjects>

            </SectionPrincipal>
        </>
    );
}

export default Projetos;