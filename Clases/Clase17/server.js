import express, { request, response } from 'express'
import dotenv from 'dotenv'

dotenv.config()

const PORT = process.env.PORT || 3001
const app = express ()
app.use(express.urlencoded({extended:true}))
app.use(express.json())

app.listen(PORT, ()=>{
    console.log (`Server running on port ${PORT}`)
})