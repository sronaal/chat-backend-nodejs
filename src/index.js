import ConexionDB from "./database.js";
import Server from "./models/server.js";

const server = new Server()
const database = new ConexionDB()


database.conectarse()
server.executeServer()