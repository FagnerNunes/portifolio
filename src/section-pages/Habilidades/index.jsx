import React from 'react';
import bgHabilidades from '../../assets/background/bg-habilidades.jpg'
import { SectionPrincipal, Overlay } from '../../components/Sections/Section';

import { Title } from '../../components/Sections/Section';

import {
    ContentHabilidades,
    Skills,
    BoxIcon
} from './styled';

import { arr_skills } from './skills';

function Habilidades() {

    return (
        <SectionPrincipal bg_image={bgHabilidades}>

            <Overlay bg="rgba(0, 0, 0, .5)" />

            <ContentHabilidades>
                <Title>Habilidades</Title>

                <Skills>

                    {
                        arr_skills?.map((skill, index) => {
                            return (
                                <BoxIcon key={index}>
                                    {skill.icon}
                                    <span>{skill.titulo}</span>
                                </BoxIcon>
                            )
                            // console.log(skill[index].titulo)
                        })
                    }

                </Skills>

            </ContentHabilidades>

        </SectionPrincipal>
    )
}

export default Habilidades