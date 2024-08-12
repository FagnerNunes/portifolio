import preview_shortly from '../../../../assets/images/projetos/preview-shortly.png'
import preview_card_interactive from '../../../../assets/images/projetos/preview-card-interactive-bank.png'
import preview_search_github from '../../../../assets/images/projetos/preview-search-user-github.png'
import preview_my_class_app from '../../../../assets/images/projetos/preview-my-class-app.png'
import preview_page_twitter from '../../../../assets/images/projetos/preview-page-twitter.png'
import preview_page_facebook from '../../../../assets/images/projetos/preview-page-facebook.png'

import {
    ContentHabilidades,
    Skills,
    BoxIcon
} from './styled';

// ICONS
import {
    IoLogoHtml5,
    IoLogoCss3,
    IoLogoJavascript,
} from "react-icons/io5";

import {
    SiMysql,
    SiAdobephotoshop
} from "react-icons/si";

import {
    TbApi
} from "react-icons/tb";

import {
    FaPhp,
    FaPython,
    FaSass
} from "react-icons/fa";

import {
    DiJqueryLogo,
    DiReact,
} from "react-icons/di";

export const project_cards = [
    
    {
        img: preview_card_interactive,
        titulo: 'Card Interactive Bank',
        descricao: 'Página de cadastro com cartão interativo. Desenvolvido com ReactJs e Sass.',
        tecnologias: [ <DiReact />, <FaSass />],
        link_github: 'https://github.com/FagnerNunes/desafios-frontend-mentor/tree/main/card-interactive-bank',
        deploy: 'https://fagnernunes.github.io/desafios-frontend-mentor/card-interactive-bank/'
    },
    
    {
        img: preview_search_github,
        titulo: 'Search Github User',
        descricao: 'Página para  pesquisa de usuários do Github. Desenvolvido com ReactJS, Sass e Axios para a API.',
        tecnologias: [ <DiReact />, <FaSass />, <TbApi />],
        link_github: 'https://github.com/FagnerNunes/desafios-frontend-mentor/tree/main/search-user-github',
        deploy: 'https://fagnernunes.github.io/desafios-frontend-mentor/search-user-github/'
    },
    
    {
        img: preview_shortly,
        titulo: 'Shortly',
        descricao: 'Encurtador de links com API. Desenvolvido com Html, Css e Jquery.',
        tecnologias: [ <IoLogoHtml5 />, <IoLogoCss3 />, <DiJqueryLogo />,  <TbApi />],
        link_github: 'https://github.com/FagnerNunes/desafios-frontend-mentor/tree/main/shortly',
        deploy: 'https://fagnernunes.github.io/desafios-frontend-mentor/shortly/'
    },
    
    {
        img: preview_my_class_app,
        titulo: 'My Class App',
        descricao: 'Realizei o design desse projeto e o desenvolvimento da página de login e cadastro para uma escola fictícia. Desenvolvido com React Native.',
        tecnologias: [ <DiReact /> ],
        link_github: 'https://github.com/FagnerNunes/my-class-app',
        deploy: ''
    },
    
    {
        img: preview_page_twitter,
        titulo: 'Página do antigo Twitter',
        descricao: 'Desenvolvi uma réplica da página do Twitter, atualmente X com Html e Css.',
        tecnologias: [ <IoLogoHtml5 />, <IoLogoCss3 /> ],
        link_github: 'https://github.com/FagnerNunes/Page-login-twitter',
        deploy: 'https://fagnernunes.github.io/Page-login-twitter/'
    },
    
    {
        img: preview_page_facebook,
        titulo: 'Página do Facebook',
        descricao: 'Desenvolvi uma réplica da página do Facebook com Html e Css.',
        tecnologias: [ <IoLogoHtml5 />, <IoLogoCss3 /> ],
        link_github: 'https://github.com/FagnerNunes/Page-login-facebook',
        deploy: 'https://fagnernunes.github.io/Page-login-facebook/'
    },

]