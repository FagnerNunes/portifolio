import { MdEmail } from "react-icons/md";
import { FaWhatsappSquare } from "react-icons/fa";
import {
    FaLinkedin,
    FaGithub
} from "react-icons/fa";
import { IoDocumentText } from "react-icons/io5";
import { FiExternalLink } from "react-icons/fi";


export const contactsInfo = [
    {
        type: 'E-mail',
        content: 'fagner.costanunes@hotmail.com',
        link: 'mailto:fagner.costanunes@hotmail.com',
        icone_principal: <MdEmail />,
        icone_hover: <FiExternalLink />,
    },
    {
        type: 'Whatsapp',
        content: '(11) 94716-5462',
        link: 'https://wa.me/5511947165462?text=Ol%C3%A1%2C%20estou%20entrando%20em%20contato%20atrav%C3%A9s%20do%20seu%20portif%C3%B3lio.',
        icone_principal: <FaWhatsappSquare />,
        icone_hover: <FiExternalLink />,
    },
    {
        type: 'Linkedin',
        content: 'Fagner Nunes',
        link: 'https://www.linkedin.com/in/fagnernunes/',
        icone_principal: <FaLinkedin />,
        icone_hover: <FiExternalLink />,
    },
    {
        type: 'Github',
        content: 'Fagner Nunes',
        link: 'https://github.com/FagnerNunes',
        icone_principal: <FaGithub />,
        icone_hover: <FiExternalLink />,
    },
    // {
    //     type: 'Baixar Currículo',
    //     link: 'https://github.com/FagnerNunes',
    //     icone_principal: <IoDocumentText />,
    //     icone_hover: <FiExternalLink />,
    // },
]