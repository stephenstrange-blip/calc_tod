import './theme_button.css'
import App from '../../../App';
function Theme_button() {
    function turnDark() {
        var body = document.body;        
        body.classList.toggle("dark-mode");
    }
    return (
        <>
            <button className='theme' onClick={turnDark}>Turn Dark Mode</button>
        </>
    )
}
export default Theme_button;