import { request, response } from 'express'
import Message from '../models/messageSchema.js'

export const obtenerMensajes = async (req = request, res = response) => {

    try {

        let mensajes = await Message.find()
            .populate('sender', 'username')
            .populate('receiver', 'username')
            .populate('room')
        
        return res.status(200).json({ mensajes })
    } catch (error) {
        console.log(error)
        return res.status(500).json({ msg: `Error en el servidor ${error}` })
    }
}