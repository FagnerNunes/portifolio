import React, { useRef, useEffect, useState } from "react";
import bgSobre from "../../assets/background/bg-sobre.jpg";
import { SectionPrincipal, Overlay } from "../../components/Sections/Section";
import { ContentSobre } from "./styled";

import {
    ContentBtns,
    ContentCarrossel,
} from "../../components/Carrossel/styled";

import {
    TbPlayerTrackPrevFilled,
    TbPlayerTrackNextFilled,
} from "react-icons/tb";

import { Title } from "../../components/Sections/Section";

import Trajetoria from "./components/trajetoria";

function Sobre() {
    const [indexTrajetoria, setIndexTrajetoria] = useState(0);
    const [statusBtn, setStatusBtn] = useState({ prev: false, next: false });
    const contentTrajetoriaRef = useRef(null);

    const handlePrev = () => {
        if (indexTrajetoria < 1) {
            return;
        }

        setIndexTrajetoria((prev) => prev - 1);
    };

    const handleNext = () => {
        if (
            contentTrajetoriaRef.current.children.length - 1 ==
            indexTrajetoria + 1
        ) {
            return;
        }

        setIndexTrajetoria((prev) => prev + 1);
    };

    useEffect(() => {
        setStatusBtn((status) => ({
            ...status,
            prev: indexTrajetoria === 0 ? true : false,
            next:
                contentTrajetoriaRef.current.children.length - 1 ===
                indexTrajetoria + 1
                    ? true
                    : false,
        }));
    }, [indexTrajetoria]);

    return (
        <SectionPrincipal bg_image={bgSobre}>
            <Overlay bg="rgba(0, 0, 0, .5)" />
            <ContentSobre>
                <div className="sobre-mim">
                    <Title>Sobre mim</Title>
                    <p>
                        Iniciei meus estudos em tecnologia por conta própria em
                        outubro de 2021, logo me identifiquei nos primeiros
                        códigos em HTML. Desde então, venho me dedicando a
                        aprender e a melhorar minhas habilidades como
                        desenvolvedor. Atualmente, trabalho como Desenvolvedor
                        Fullstack Jr. e estou cursando o 4º semestre de Análise
                        e Desenvolvimento de Sistemas. Fiz diversos cursos para
                        me aprimorar e estou sempre em busca de novos desafios e
                        oportunidades para continuar evoluindo na área.
                    </p>
                </div>
                <ContentCarrossel
                    ref={contentTrajetoriaRef}
                    trajetoria_atual={indexTrajetoria}
                >
                    <Trajetoria />

                    <ContentBtns>
                        <button
                            disabled={statusBtn.prev}
                            type="button"
                            onClick={handlePrev}
                        >
                            <TbPlayerTrackPrevFilled />
                        </button>
                        <button
                            disabled={statusBtn.next}
                            type="button"
                            onClick={handleNext}
                        >
                            <TbPlayerTrackNextFilled />
                        </button>
                    </ContentBtns>
                </ContentCarrossel>
            </ContentSobre>
        </SectionPrincipal>
    );
}

export default Sobre;
