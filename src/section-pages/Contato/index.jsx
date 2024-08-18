import React, { useState } from "react";

import { Enviar_Email } from "./enviar-email";

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

    const [formData, setFormData] = useState({
        nome: '', assunto: '', mensagem: ''
    })

    const handleSubmitForm = (e) => {
        e.preventDefault();

        if(formData.nome === '' || formData.assunto === '' || formData.mensagem === '') {
            return setResponseMessage('Preencha todos os campos.')
        }

        setResponseMessage('Enviando mensagem..')

        Enviar_Email(formData).then(res => {
            
            if(res.text == 'OK' || res.status == 200) {
                setFormData(prev => {
                    return {...prev, nome: '', assunto: '', mensagem: ''}
                })
                setResponseMessage('Mensagem enviada com sucesso!')
            }
            
        }, (erro) => {
            setResponseMessage('Infelizmente não foi possível enviar sua mensagem, tente novamente mais tarde.')
        })

    };

    return (
        <SectionPrincipal bg_image={bgContato}>
            <Overlay />

            <ContentContato>
                <FormContact onSubmit={handleSubmitForm}>

                    <Title>Contato</Title>

                    <label htmlFor="nome">
                        <input type="text" id="nome" maxLength={60} placeholder="Nome"
                        value={formData.nome || ''}
                        onChange={(e) => setFormData(prev => {
                            return {...prev, nome: e.target.value}
                        })} />
                    </label>
                    <label htmlFor="assunto">
                        <input type="text" id="assunto" maxLength={80} placeholder="Assunto"
                        value={formData.assunto || ''}
                        onChange={(e) => setFormData(prev => {
                            return {...prev, assunto: e.target.value}
                        })} />
                    </label>
                    <label htmlFor="mensagem">
                        <textarea
                            id="mensagem"
                            rows="10"
                            placeholder="Digite sua mensagem..."
                            maxLength={700}
                            value={formData.mensagem || ''}
                            onChange={(e) => setFormData(prev => {
                                return {...prev, mensagem: e.target.value}
                            })}
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
