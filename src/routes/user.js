import { Router } from "express";
import multer from "multer";
const storage = multer.memoryStorage()

import { crearUsuario, iniciarSesion, obtenerUsuarios } from '../controllers/user.js'

const upload = multer({ storage })
const routes = Router()

routes.post('/create', upload.single('photo'), crearUsuario)
routes.post('/login', iniciarSesion)
routes.get('/', obtenerUsuarios)
export default routes