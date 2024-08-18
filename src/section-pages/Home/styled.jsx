import styled from "styled-components";

export const ContentHome = styled.div`
    align-items: center;
    display: flex;
    flex-direction: column;
    gap: 4rem;
    height: 100%;
    padding-inline: 2rem;
    padding-top: 60px;
    z-index: 2;

    @media (min-width: 1024px) {
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
        animation: animar_borda 12s linear infinite;
        border-width: 3px;
        border-style: solid;
        border-image-slice: 1;
        clip-path: polygon(
            20% 0%,
            80% 0%,
            100% 20%,
            100% 80%,
            80% 100%,
            20% 100%,
            0% 80%,
            0% 20%
        );
        user-select: none;
        text-align: center;
        margin: 0 auto;
        width: 300px;
        height: 300px;
        object-fit: cover;
        object-position: top;
    }

    @keyframes animar_borda {
        0% {
        border-image-source: linear-gradient(90deg, #ff7e5f, #feb47b, #ff6f61, #dce35b);
        }
        25% {
            border-image-source: linear-gradient(180deg, #ff7e5f, #feb47b, #ff6f61, #dce35b);
        }
        50% {
            border-image-source: linear-gradient(270deg, #ff7e5f, #feb47b, #ff6f61, #dce35b);
        }
        75% {
            border-image-source: linear-gradient(360deg, #ff7e5f, #feb47b, #ff6f61, #dce35b);
        }
        100% {
            border-image-source: linear-gradient(450deg, #ff7e5f, #feb47b, #ff6f61, #dce35b);
        }
    }

    @media (min-width: 1024px) {
        width: auto;

        img {
            width: 400px;
            height: 400px;
        }
    }
`;

export const Apresentation = styled.div`
    align-self: flex-start;
    color: #fff;
    display: flex;
    flex-direction: column;
    font-family: "Fira Code", monospace;
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

    @media (min-width: 1024px) {
        height: 100%;
        justify-content: center;

        h1 {
            font-size: 4rem;
        }
    }
`;

export const ArrowButton = styled.button`
    animation: animar_btn_y 4s ease-in-out infinite;
    background: none;
    border: none;
    margin-top: 1rem;

    @keyframes animar_btn_y {
        0%,
        30%,
        100% {
            transform: translateY(-20px);
        }

        60% {
            transform: translateY(0);
        }
    }

    @media (min-width: 1024px) {
        display: none;
    }
`;
