import { Router } from "express";
import { crearUsuario, iniciarSesion, obtenerUsuarios } from '../controllers/user.js'

const routes = Router()

routes.post('/create', crearUsuario)
routes.post('/login', iniciarSesion)
routes.get('/', obtenerUsuarios)
export default routes