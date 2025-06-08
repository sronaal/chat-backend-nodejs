import express from 'express'
import http from 'http'
import {Server as socketio} from 'socket.io'
import cors from 'cors'
import morgan from 'morgan'

import Chat from './chat.js'
import routes from '../routes/index.js'

class Server{

    constructor(){

        this.app = express()
        this.port = process.env.PORT || 3000


        this.server = http.createServer(this.app)

        this.io = new socketio(this.server, {
            cors:{
                origin: 'http://localhost:5173/',
                methods:['GET', 'POST']
            }
        })
    }


    middlewares(){
        
        this.app.use(morgan('dev'))
        this.app.use(cors({
            origin: 'http://localhost:5173'
        }))
        this.app.use(express.json())
        this.app.use('/api', routes)
    }

    configuracionChat(){

        new Chat(this.io)
    }

    executeServer(){

        this.middlewares()
        
        this.configuracionChat()


        this.server.listen(this.port, () => {
            console.log(`Servidor Ejecutandose en puerto ${this.port}`)
        })
    }

}

export default Server