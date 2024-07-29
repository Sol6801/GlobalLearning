/*middleware para las solicitudes realizadas. cada que se realiza una solicitud HTTP al servidor, el middleware debe registrar la fecha en que se realizó, el método HTTP realizado y el estado HTTP de la respuesta obtenida desde el servidor. El registro debe tener persistencia en un archivo llamado request.txt  */
import fs from 'node:fs';

const requests = (request, response, next) => {
    const date = Date().toLocaleString();
    const method = request.method
    response.on('finish', () => {
        const content = `La solicitud fue él ${date} y el metodo utilizado fue ${method}.\n`;
        try {
            fs.appendFileSync('./middlewares/requests.txt', content);
            console.log(content)
        } catch (err) {
            console.error(err);
        }
    });
    next()
}

// try {
//     fs.writeFileSync('request.txt', answer.join(' '));
//   } catch (err) {
//     console.error(err);
//   }

export default requests