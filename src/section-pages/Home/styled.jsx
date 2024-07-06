import styled from 'styled-components';

export const ContentHome = styled.div`
    align-items: center;
    display: flex;
    flex-direction: column;
    gap: 4rem;
    height: 100%;
    position: relative;
    z-index: 2;

    figure {
        border: 1px solid transparent;
        padding: 1.2rem 1rem;
        position: relative;
        width: 70%;

        img {
            clip-path: polygon(20% 0%, 80% 0%, 100% 20%, 100% 80%, 80% 100%, 20% 100%, 0% 80%, 0% 20%);
            margin: 0 auto;
            width: 90%;
        }
        
        &::before {
            animation: animar_borda 4s linear infinite;
            clip-path: polygon(20% 0%, 80% 0%, 100% 20%, 100% 80%, 80% 100%, 20% 100%, 0% 80%, 0% 20%);
            content: '';
            background-image: linear-gradient(-45deg, #1139eb, #10db87);
            background-size: 600% 600%;
            height: 90%;
            left: 50%;
            margin: auto;
            position: absolute;
            top: 50%;
            transform: translateX(-50%) translateY(-50%);
            width: 84%;
            z-index: -1;
        }

        @keyframes animar_borda {
            0% {
                background-position: 0 0;
            }
            50% {
                background-position: 50% 50%;
            }
            100% {
                background-position: 100% 100%;
            }
        }
    }

    .apresentacao {
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
        padding-inline: 3rem;

        h1 {
            font-size: 2.5rem;
            font-weight: bold;
            text-shadow: 0px 0px 2px rgba(255, 255, 255, 1);
        }
    }
`;

export const ArrowButton = styled.button`
    animation: animar_btn_y 4s ease-in-out infinite;
    background: none;
    border: none;
    margin-top: 1rem;
    
    @keyframes animar_btn_y {
        0%, 30%, 100% {
            transform: translateY(-20px);
        }
        
        70% {
            transform: translateY(0);
        }
    }
`;





