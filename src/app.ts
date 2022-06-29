import fastify  from "fastify"
import path from "path"
import dotenv from 'dotenv'


dotenv.config({
    path:path.resolve(__dirname, '../.env')
})

import { BotStarted } from "./bot"
const server = fastify({
    logger: true
})
server.register(BotStarted)

function start(){
    server.listen({
        port:Number(process.env.PORT),
        host:String(process.env.HOST)
    }).then(()=> console.log('started'))
    .catch((e)=> console.log("Failed", e))
}

start();