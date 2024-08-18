import { init, send } from "@emailjs/browser";

export const Enviar_Email = (data) => {

    const key_service = process.env.REACT_APP_SERVICE_ID
    const key_template = process.env.REACT_APP_TEMPLATE_ID
    const key_API = process.env.REACT_APP_API_KEY

    init({
        publicKey: key_API,
        // Bloquear robôs
        blockHeadless: true,
        blockList: {},
        limitRate: {
          // Set the limit rate for the application
          id: 'app',
          // Tempo para poder enviar novamente
          throttle: 10000,
        },
      });

    return send(key_service, key_template, data)
}