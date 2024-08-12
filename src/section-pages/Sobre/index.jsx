import React, { useRef, useEffect, useState } from "react";
import bgSobre from "../../assets/background/bg-sobre.jpg";
import { SectionPrincipal, Overlay } from "../../components/Sections/Section";
import { ContentSobre } from "./styled";

import { ContentBtns, ContentCarrossel } from "../../components/Carrossel/styled";

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
                        Sou um entusiasta da tecnologia, iniciei meus estudos de
                        forma autônoma em outubro de 2021 e gostei já de cara
                        nos primeiros códigos html. Desde então venho estudando
                        para aperfeiçoar cada vez mais meus conhecimentos como
                        desenvolvedor. Possuo experiência de forma autônoma e
                        estou em busca do meu primeiro emprego na área de TI.
                    </p>
                </div>
                <ContentCarrossel
                    ref={contentTrajetoriaRef}
                    trajetoria_atual={indexTrajetoria} >

                    <Trajetoria />

                    <ContentBtns >
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
