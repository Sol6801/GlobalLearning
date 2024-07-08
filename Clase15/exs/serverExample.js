import express from 'express'
import http from 'node:http'
import { Socket, server } from 'socket.io'

const PORT = 3000 
const app = express() //configuracion general del proyecto
const httpServer = http.createServer(app) //genero server con socket.io de http
app.use(express.urlencoded({extended:true}))
app.use(express(json()))//entender a futuro

app.set('view engine','ejs')
app.set('views','public/views')
app.set('/static',express.static('public'))

app.get('/', (_request, response)=>{
    response.render('login')
})

app.get('/', (request, response)=>{
    const body = request.body //const { body } = request
    const { username } = body
    response.render('chat', {
        username
    })
})

const io = new Server (app, {
    cors:{
        origin:'*'
    }
})

io.on('connection', (socket)=> {
    console.log('a user connected')

    // socket.on('message', ()=>{

    // })
})


app.listen(PORT, ()=>{
    console.log(`Server is running on ${PORT}`)
})