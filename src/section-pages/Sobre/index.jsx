import React from 'react';
import bgSobre from '../../assets/background/bg-sobre.jpg'
import { SectionPrincipal, Overlay } from '../../components/Sections/Section';

function Sobre() {
    return (
        <SectionPrincipal bgImage={bgSobre}>
            <Overlay bg="rgba(0, 0, 0, .5)" />

        </SectionPrincipal>
    )
}

export default Sobre