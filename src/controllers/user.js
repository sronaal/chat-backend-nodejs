import { request, response } from "express";
import User from "../models/userSchema.js";
import { convertPasswordToHash, validarPassword } from '../libs/bcrypt.js'
import { crearToken } from "../libs/jwt.js";

import { subirBufferACloudinary } from '../libs/cloudinary.js'

export const crearUsuario = async (req = request, res = response) => {

    const { username, password } = req.body
    console.log(username, password)


    try {

        const userFind = await User.findOne({ username })

        if (userFind) { return res.status(400).json({ msg: `El usuario ${username} ya se encuentra registrado` }) }

        const hashPassword = await convertPasswordToHash(password)
        console.log(req.file)

        const imageUpload = await subirBufferACloudinary(req.file.buffer)


        const usuario = await User.create({ username, password: hashPassword, photoURL: imageUpload.url })

        const token = crearToken({ id: usuario._id, username: usuario.username })
        return res.status(201).json({ token })

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

        return res.status(200).json({ userObject, token })
    } catch (error) {
        console.log(error)
        return res.status(500).json({ msg: `Error del servidor ${error}` });

    }
}

export const obtenerUsuarios = async (req = request, res = response) => {

    try {
        let usuarios = await User.find().select('-password')

        return res.status(200).json({ usuarios })
    } catch (error) {
        return res.status(500).json({ msg: `Error del servidor ${error}` });
    }
}