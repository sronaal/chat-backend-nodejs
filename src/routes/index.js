import { Router } from 'express'
import routesUser from './user.js'


const routes = Router()

routes.use('/user', routesUser)



export default routes