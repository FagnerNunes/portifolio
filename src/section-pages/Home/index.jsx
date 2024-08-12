import React from 'react';
import bgHome from '../../assets/background/bg-home.jpg';
import imgPerfil from '../../assets/images/perfil/perfil-fagner.png';
import { BsChevronDown } from "react-icons/bs";
import { SectionPrincipal, Overlay } from '../../components/Sections/Section';
import {
    ContentHome,
    ArrowButton,
    ImagePerfil,
    Apresentation
} from './styled';

const Home = () => {
    return (
        <>
            <SectionPrincipal bg_image={bgHome}>

                <Overlay />

                <ContentHome>
                    <ImagePerfil>
                        <img src={imgPerfil} alt="Perfil - Fagner" />
                    </ImagePerfil>

                    <Apresentation>
                        <p>Olá, eu sou</p>
                        <h1>Fagner Nunes</h1>
                        <p>Desenvolvedor Full-stack</p>
                    </Apresentation>
                    
                    <ArrowButton className="btn-arrow">
                        <BsChevronDown fontSize={30} color='#D1D1D1' />
                    </ArrowButton>
                </ContentHome>

            </SectionPrincipal>
        </>
    );
}

export default Home;
