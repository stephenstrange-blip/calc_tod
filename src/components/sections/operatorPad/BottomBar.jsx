import './bottomBar.css'

function BottomBar ({onNumClick, onOperatorClick}) {
  return (
    <div className='bottom-bar'>
      <button className='grid zero' onClick={() => onNumClick(0)}>0</button>
      <button className='grid addition operator' onClick= {() => onOperatorClick("+")}>+</button>
      <button className='grid subtraction operator' onClick= {() => onOperatorClick("-")} >-</button>
      <button className='grid equate operator' onClick= {() => onOperatorClick("=")}>=</button>
    </div>
  )
}

export default BottomBar