import { request, response } from "express";
import User from "../models/userSchema.js";
import { convertPasswordToHash } from '../libs/bcrypt.js'
export const crearUsuario = async (req = request, res = response) => {
    try {
        
        const {username, password} = req.body

        const userFind = await User.findOne({ username })

        if(userFind) return res.status(400).json({msg: `El usuario ${username} ya se encuentra registrado`})  
        const hashPassword =       
     } catch (error) {
        return res.status(500).json({ msg: `Error del servidor ${error}` });
    }
};
