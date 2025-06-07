import { Server, Socket } from "socket.io"
import Message from "./messageSchema.js";

class Chat {

    /**
   * @param {Server} io - Instancia de Socket.IO Server
   */
    constructor(io) {
        /** @type {Server} */
        this.io = io;


        this.chatEvents();
    }


    chatEvents() {

        this.io.on('connection', (
             /** @type {import("socket.io").Socket} */ socket
        ) => {

            socket.on('enviar-mensajes', async (data) => {

                const { sender, receiver, content } = data

                try {
                    const message = new Message({ sender, receiver, content })
                    await message.save()
                } catch (error) {
                    
                    throw `Error al guardar el mensaje ${error}`
                }
            
            
                
            })

 

            

        })
    }
}



export default Chat