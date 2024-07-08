import express, { request, response } from 'express'
import dotenv from 'dotenv'

dotenv.config()

const PORT = process.env.PORT || 3001
const app = express ()
app.use(express.urlencoded({extended:true}))
app.use(express.json())

app.set('view engine', 'ejs')
app.set('views', 'pubic/views')
app.use('/static', express.static('public'))

app.get('/',(_request, response) => {
    try{
    response.render('index')
    }
    catch{
        response.render('errorView')
    }

})

app.listen(PORT, ()=>{
    console.log (`Server running on port ${PORT}`)
})