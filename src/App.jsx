import viteLogo from '/vite.svg'
import './App.css';
import NumGrid from './components/sections/numGrid/NumGrid';
import BottomBar from './components/sections/operatorPad/BottomBar';
import Display from './components/sections/display/Display';
import InputNum from './components/sections/core/calcFunctions';
import Theme_button from './components/sections/theme/Theme_button';


function App() {
  const [num1, num2, setNum, operator, setOperator, answer] = InputNum();
  console.log(`\nOperator is not yet pressed! ${!operator}`)
  
  return ( 
    <div className="App">
      <NumGrid onNumClick={setNum} onOperatorClick={setOperator} />
      <BottomBar onNumClick={setNum} onOperatorClick={setOperator}/>
      <Display value={!operator ? [num1, num2] : [num1, num2, answer]} operator={operator}/>
      <Theme_button/>
    </div>
  );
}

export default App;
