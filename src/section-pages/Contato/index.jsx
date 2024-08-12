import React, { useState } from "react";

import bgContato from "../../assets/background/bg-contato.jpg";

import {
    SectionPrincipal,
    Overlay,
    Title,
} from "../../components/Sections/Section";

import {
    ContentContato,
    FormContact,
    ContentInfos,
    BoxMessage,
} from "./styled";

import { contactsInfo } from "./contacts";

const Contato = () => {
    const [responseMessage, setResponseMessage] = useState(null);

    const handleSubmitForm = (e) => {
        e.preventDefault();

        setResponseMessage('Infelizmente não foi possível enviar sua mensagem, tente novamente mais tarde.')
    };

    return (
        <SectionPrincipal bg_image={bgContato}>
            <Overlay />

            <ContentContato>
                <FormContact onSubmit={handleSubmitForm}>
                    <Title>Contato</Title>

                    <label htmlFor="nome">
                        <input type="text" id="nome" placeholder="Nome" />
                    </label>
                    <label htmlFor="assunto">
                        <input type="text" id="assunto" placeholder="Assunto" />
                    </label>
                    <label htmlFor="mensagem">
                        <textarea
                            id="mensagem"
                            rows="10"
                            placeholder="Digite sua mensagem..."
                        ></textarea>
                    </label>

                    <button>Enviar</button>

                    {responseMessage && (
                        <BoxMessage>
                            <p>{responseMessage}</p>
                        </BoxMessage>
                    )}
                </FormContact>

                <ContentInfos>
                    {contactsInfo?.map((infos) => {
                        return (
                            <a
                                key={infos.type}
                                href={infos.link}
                                className="circle-info"
                            >
                                {infos.icone_principal}
                                {infos.icone_hover}
                                <p>{infos.content}</p>
                            </a>
                        );
                    })}
                </ContentInfos>
            </ContentContato>
        </SectionPrincipal>
    );
};

export default Contato;
