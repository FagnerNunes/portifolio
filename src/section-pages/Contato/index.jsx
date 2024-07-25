import React from 'react'

import bgContato from '../../assets/background/bg-contato.jpg'

import { SectionPrincipal, Overlay, Title } from '../../components/Sections/Section';

import { ContentContato, FormContact, ContentInfos } from './styled';

import { contactsInfo } from './contacts';

const Contato = () => {

    return (
        <SectionPrincipal bgImage={bgContato}>
            <Overlay />

            <ContentContato>
                <Title>Contato</Title>

                <FormContact>
                    <label htmlFor="nome">
                        <input type="text" id="nome" placeholder='Nome' />
                    </label>
                    <label htmlFor="assunto">
                        <input type="text" id="assunto" placeholder='Assunto' />
                    </label>
                    <label htmlFor="mensagem">
                        <textarea id="mensagem" rows="10" placeholder='Digite sua mensagem...'></textarea>
                    </label>

                    <button type='submit'>Enviar</button>
                </FormContact>


                <ContentInfos>
                    {

                        contactsInfo?.map(infos => {
                            return (
                                <>
                                    <a key={infos.type} href={infos.link} className="circle-info">
                                        {infos.icone_principal}
                                        {infos.icone_hover}
                                        <p>{infos.content}</p>
                                    </a>
                                </>
                            )
                        })

                    }
                </ContentInfos>

            </ContentContato>
        </SectionPrincipal>
    )
}

export default Contato