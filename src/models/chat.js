import { Server, Socket } from "socket.io"
import Message from "./messageSchema.js";

/**
 * Clase Chat para gestionar la lógica de los eventos de chat usando Socket.IO.
 */
class Chat {

    /**
     * Crea una instancia de Chat.
     * @param {Server} io - Instancia de Socket.IO Server.
     */
    constructor(io) {
        /** @type {Server} */
        this.io = io;

        // Inicializa los eventos del chat
        this.chatEvents();
    }

    /**
     * Define y gestiona los eventos de chat para las conexiones de Socket.IO.
     */
    chatEvents() {
        // Se ejecuta cuando un cliente se conecta al servidor de sockets
        this.io.on('connection', (
            /** @type {import("socket.io").Socket} */ socket
        ) => {

            // Escucha el evento 'enviar-mensajes' enviado por el cliente
            socket.on('enviar-mensajes', async (data) => {
                console.log(data)
                const { sender, receiver, content } = data

                try {
                    // Crea y guarda un nuevo mensaje en la base de datos
                    const message = new Message({ sender, receiver, content })
                    await message.save()
                    const mensajeObject = message.toObject()

                    this.io.emit('enviar-mensaje', mensajeObject )
                } catch (error) {
                    // Maneja errores al guardar el mensaje
                    throw `Error al guardar el mensaje ${error}`
                }
            })

            
        })
    }
}

export default Chat