import { request, response } from 'express'
import jwt from 'jsonwebtoken'


export const crearToken = (userData) => {

    return jwt.sign(userData, process.env.JWTSECRET, { expiresIn: '10h' })
}