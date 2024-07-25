import styled from 'styled-components';

export const ContentHome = styled.div`
    align-items: center;
    display: flex;
    flex-direction: column;
    gap: 4rem;
    height: 100%;
    padding-inline: 2rem;
    padding-top: 60px;
    z-index: 2;

    @media (min-width: 1024px){
        align-items: center;
        flex-direction: row-reverse;
        justify-content: space-between;
        padding-inline: 4rem;
        width: 100%;
        max-width: 1400px;
    }
`;

export const ImagePerfil = styled.figure`
    border: 1px solid transparent;
    padding: 1.2rem 1rem;
    position: relative;
    text-align: center;
    width: 100%;

    img {
        animation: animar_borda 6s linear infinite;
        border-top: 3px solid #10a2db;
        border-right: 3px solid #10a2db;
        border-bottom: 3px solid #10db87;
        border-left: 3px solid #10db87;
        clip-path: polygon(20% 0%, 80% 0%, 100% 20%, 100% 80%, 80% 100%, 20% 100%, 0% 80%, 0% 20%);
        text-align: center;
        margin: 0 auto;
        max-width: 350px;
        width: 80%;

        @media (min-width: 1024px){
            width: 100%;
        }

        @keyframes animar_borda {
            0%, 100% {
                border-top: 3px solid #10a2db;
                border-right: 3px solid #10a2db;
                border-bottom: 3px solid #10db87;
                border-left: 3px solid #10db87;
            }
            50% {
                border-bottom: 3px solid #10a2db;
                border-left: 3px solid #10a2db;
                border-top: 3px solid #10db87;
                border-right: 3px solid #10db87;
            }
        }
    }

    @media (min-width: 1024px){
        width: auto;
    }
`

export const Apresentation = styled.div`
    align-self: flex-start;
    color: #fff;
    display: flex;
    flex-direction: column;
    font-family: 'Fira Code', monospace;
    font-style: normal;
    font-optical-sizing: auto;
    font-size: 1.4rem;
    font-weight: 300;
    gap: 1rem;

    h1 {
        font-size: 2.5rem;
        font-weight: bold;
        text-shadow: 0px 0px 2px rgba(255, 255, 255, 1);
    }

    @media (min-width: 1024px){
        height: 100%;
        justify-content: center;

        h1 {
            font-size: 4rem;
        }
    }
`

export const ArrowButton = styled.button`
    animation: animar_btn_y 4s ease-in-out infinite;
    background: none;
    border: none;
    margin-top: 1rem;
    
    @keyframes animar_btn_y {
        0%, 30%, 100% {
            transform: translateY(-20px);
        }
        
        60% {
            transform: translateY(0);
        }
    }

    @media (min-width: 1024px){
        display: none;
    }
`;





