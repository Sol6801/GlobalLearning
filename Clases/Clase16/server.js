import express, { request, response } from 'express'
import dotenv from 'dotenv'
import time from './middlewares/time.js'
import requests from './middlewares/requests.js'

dotenv.config()

const PORT = process.env.PORT || 3001
const app = express ()
app.use(express.urlencoded({extended:true}))
app.use(express.json())

app.use(time)
app.use(requests)

app.listen(PORT, ()=>{
    console.log (`Server running on port ${PORT}`)
})