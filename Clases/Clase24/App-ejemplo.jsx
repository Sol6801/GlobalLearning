import { useRef } from 'react'
import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import { useEffect } from 'react'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vitejs.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }
function Title(props) {
  return <h1>{props.greeting} {props.jaimito}</h1>
}

function ShowSum({ number1, number2 }) {
  const res = number1 + number2
  //!let showRes = false
  const [showRes, setShowRes] = useState(false)
  const paragraphRef = useRef(null)

  const handleClick = () => {
    //!showRes = true
    paragraphRef.current.innerText = "Holis"
    setShowRes((prev)=>{
      return !prev
  })
    // if (showRes){
    //   setShowRes(false)
    //   }else{
    //     setShowRes(true)
    //   }

  }

  // useEffect(()=>{
  //   console.log('se montó el componente')
  //   //* limpieza de componentes cuando se desmontan*/
  //  return ()=>{
  //   console.log('se desmontó el componente')
  //  }
  // },[])

  useEffect(()=>{
    console.log(paragraphRef.current)
  },[showRes])

  return (
    <section>
      <p ref={paragraphRef}>Test</p>
      <p >La suma de {number1} y {number2}</p>
      <button onClick={handleClick}> {showRes ? 'Ocultar' : 'Ver Suma'} </button>
      {showRes ? <p>{res}</p> : null}
    </section>
  )
}

// function ShowSum(props){
//   const n1 = props.num1 
//   const n2 = props.num2
//   const res = n1 + n2
//   return <p>La suma de {n1} y {n2}: {res}</p>
// }

function App() {
  const [showComponent, setShowComponent] = useState(true)
  return <div>
    <Title greeting="Un saludito desde REACT, abajo hay un componente que suma" jaimito={2} />
    <button onClick={() => setShowComponent(false)}>Ocultar componente</button> {/*setShowComponent(!showComponent) intercambia estado, niega negado*/}
    {showComponent ?  <ShowSum number1={2} number2={3} /> :null}
 
  </div>
}

export default App
