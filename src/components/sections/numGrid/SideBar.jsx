import './sideBar.css'

function SideBar ({onOperatorClick}) {
  return (
    <div className='side-bar'>
      <button className='grid clear operator'onClick= {() => onOperatorClick("clr")} >clr</button>
      <button className='grid multiplication operator'onClick= {() => onOperatorClick("*")} >*</button>
      <button className='grid division operator' onClick= {() => onOperatorClick("/")}>/</button>
      
    </div>
  )
}

export default SideBar