import { request, response } from "express";

import User from "../models/userSchema.js";
import { convertPasswordToHash, validarPassword } from '../libs/bcrypt.js'
import { crearToken } from "../libs/jwt.js";

export const crearUsuario = async (req = request, res = response) => {

    const { username, password } = req.body

    try {

        const userFind = await User.findOne({ username })

        if (userFind) { return res.status(400).json({ msg: `El usuario ${username} ya se encuentra registrado` }) }

        const hashPassword = await convertPasswordToHash(password)

        await User.create({ username, password: hashPassword })

        return res.status(201).json({ msg: 'Usuario creado exitosamente' })

    } catch (error) {
        return res.status(500).json({ msg: `Error del servidor ${error}` });
    }
};


export const iniciarSesion = async (req = request, res = response) => {

    const { username, password } = req.body
    try {
        const userFind = await User.findOne({ username })

        if (!userFind) { return res.status(401).json({ msg: `Usuario y Contraseña invalidos` }) }

        if (!validarPassword(userFind.password, password)) { return res.status(401).json({ msg: `Usuario y Contraseña invalidos` }) }

        const userObject = {
            "id": userFind._id,
            "username": userFind.username
        }

        const token = crearToken(userObject)

        return res.status(200).json({ token })
    } catch (error) {
        return res.status(500).json({ msg: `Error del servidor ${error}` });

    }
}