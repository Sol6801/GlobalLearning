import express from 'express'

const app = express()

//* http://localhost:3008/ 

app.get('/', (_request, response)=>{
    return response.send('Hola clase 😀')    
})

app.get('/sol', (_request, response)=>{
    return response.status(200).json ({
        name:"Sol",
        pet:"Negro y Mushu",
        year:2024
})
})

app.get('/healthcheck', (_request, response)=>{
    return response.status(200).send('OK')
})

app.listen(3008, () => {
    console.log('Servidor levantado en el puerto 3008')
})

// app.get('/', (_request, response)=>{
//     try{
//     return response.status(200).json ({
//         name:"Sol",
//         pet:"Negro y Mushu",
//         year:2024
//     })
//     } catch (error){
//         return response.status(400).json({
//             error: "Un error ha ocurrido"
//         })
//     }
// })
