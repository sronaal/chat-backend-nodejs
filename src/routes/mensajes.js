import { Router } from "express";
import { obtenerMensajes } from '../controllers/mensajes.js'
const routes = Router()


routes.get('/', obtenerMensajes)

export default routes