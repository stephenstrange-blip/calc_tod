import './numGrid.css';
import SideBar from './SideBar';



function NumGrid({ onNumClick, onOperatorClick }) {
    return (
        <div className='upper-container'>
            <div className='numPad'>
                {[0, 1, 2].map((row) => {
                    return (
                        <div className={`gridRow num${row}`} key={row}>
                            {[9, 8, 7].map((column) => {
                                let index = column - row * 3;
                                return (<button
                                    className={`grid num${index}`}
                                    key={index}
                                    onClick={() => onNumClick(index)}
                                >{index}</button>)
                            })
                            }
                        </div>
                    )
                })}
            </div>
            <SideBar onOperatorClick={onOperatorClick} />

        </div>

    )
}
export default NumGrid;



