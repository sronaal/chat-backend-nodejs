import mongoose from "mongoose";


class ConexionDB{

    constructor(){

        this.url = process.env.MONGODB_URL || 'mongodb://localhost:27017/chatapp'
    }

    async conectarse(){

        try {
            await mongoose.connect(this.url)
            console.log("Conexion Base de datos exitosa")
        } catch (error) {
            console.log(error)
            throw `Error de conexion mongodb ${error}`
        }
    }

}

export default ConexionDB