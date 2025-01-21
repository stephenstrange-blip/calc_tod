import viteLogo from '/vite.svg'
import './App.css';
import NumGrid from './components/sections/numGrid/NumGrid';
import BottomBar from './components/sections/operatorPad/BottomBar';
import Display from './components/sections/display/Display';
import InputNum from './components/sections/core/calcFunctions';


function App() {
  const [num1, num2, setNum, operator, setOperator, answer] = InputNum();
  console.log(`From the App. ${!operator}`)
  
  return ( 
    <div className="App">
      <NumGrid onNumClick={setNum} onOperatorClick={setOperator} />
      <BottomBar onNumClick={setNum} onOperatorClick={setOperator}/>
      <Display value={!operator ? [num1, num2] : [num1, num2, answer]} operator={operator}/>
    </div>
  );
}

export default App;
