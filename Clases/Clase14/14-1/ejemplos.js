console.log('hola1')

setTimeout(()=>{
    console.log('hola2')
}, 3000)

console.log('hola3')


const TIME_IN_MS = 500
let counter = 5


const threeSecondsInterval = setInterval(()=>{
    console.log(counter)
    counter--
    if (counter === 0) {
        clearInterval(threeSecondsInterval)
    }
}, TIME_IN_MS)


/*
async function miFunction(){}

const myFunction = async () => {}
    



const promise = new Promise ((resolve, reject)=>{
    promise code here
})

console.log(promise)

const promise = new Promise ((resolve, reject)=>{
    resolve('Success!')
})

promise.then((result) => console.log(result))

const promise = new Promise ((resolve, reject)=>{
    reject(new Error('PromiseError!'))
})

promise.catch((error) => console.log(error))

const promise = new Promise((resolve, reject) => {
    reject(new Error('Error ocurred'));
})

promise
.them((value)=> {
    console.log(value);
})
.catch((error)=>{
    if (error instanceof Error){
        console.log(error.message);
    }
    console.log(error);
})
*/