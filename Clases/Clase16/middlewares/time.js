/*registro de tiempo de demora de una solicitud HTTP. cada vez que se realice una solicitud http se debe calcular el tiempo que se demoró en realizarse y mostrar dicho tiempo en la terminal del servidor.*/

const time = (_request, response, next)=>{
    const start = Date.now();
    response.on('finish', () => {
        const duration = Date.now() - start;
        console.log(`La solicitud tomó ${duration} ms`);
    });
    next()
}

export default time