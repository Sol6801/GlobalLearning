import './App.css'
import Clocks from './components/clocks';
import Navbar from './components/nav-bar';
import Paragraph from './components/paragraph';
import { Title } from './components/Title';

/*const NUMBERS_PAIR=[
{number1:10, number2:5, key:"sum-1"},
{number1:7, number2:3, key:"sum-2"},
] */

function App() {
  return (
    //* .map((item,index,arr) => {}) */
    /*{NUMBERS_PAIR.map(({number1, number2, key})=>{
      return <ShowSum number1={number1} number2={number2} key={key}/>
      })
    } */
    <div>
      <Title/>
      <Navbar/>
      <Clocks/>
      <Paragraph/>
    </div>
  );
}


export default App
