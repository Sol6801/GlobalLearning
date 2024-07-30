import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import { expressjwt as ejwt } from 'express-jwt'
import { userRoutes } from './routes/userRouter.js'

dotenv.config()

const PORT = process.env.PORT || 3001

const app = express()
app.use(express.json())
app.use(cors({
  origin: '*',
  methods: 'GET, POST, PUT, DELETE',
}))


app.use(ejwt({
  secret: process.env.SECRET_KEY,
  algorithms: ['HS256'],
}).unless({
  path: ['/api/login', '/api/register', '/api/refresh-token'],
})
)

app.use(userRoutes())


app.listen(PORT, () => {
  console.log(`El servidor esta corriendo en el puerto ${PORT}`)
})