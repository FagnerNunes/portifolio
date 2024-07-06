import React from 'react';
import bgHome from '../../assets/background/bg-home.jpg';
import imgPerfil from '../../assets/images/image-home-fn.png';
import { BsChevronDown } from "react-icons/bs";
import { SectionPrincipal, Overlay } from '../../components/Sections/Section';
import {
    ContentHome,
    ArrowButton,
} from './styled';

const Home = () => {
    return (
        <>
            <SectionPrincipal bgImage={bgHome}>

                <Overlay />

                <ContentHome>
                    <figure>
                        <img src={imgPerfil} alt="Perfil - Fagner" />
                    </figure>

                    <div className='apresentacao'>
                        <p>Olá, eu sou</p>
                        <h1>Fagner Nunes</h1>
                        <p>Desenvolvedor Full-stack</p>
                    </div>
                    
                    <ArrowButton className="btn-arrow">
                        <BsChevronDown fontSize={30} color='#D1D1D1' />
                    </ArrowButton>
                </ContentHome>

            </SectionPrincipal>
        </>
    );
}

export default Home;
