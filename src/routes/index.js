import { Router } from 'express'

import routesUser from './user.js'
import routerMessages from './mensajes.js'

const routes = Router()

routes.use('/user', routesUser)
routes.use('/mensajes', routerMessages)


export default routes