import { Router } from "express";
import { crearUsuario, iniciarSesion } from '../controllers/user.js'

const routes = Router()

routes.post('/create', crearUsuario)
routes.post('/login', iniciarSesion)

export default routes