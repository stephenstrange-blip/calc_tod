import './theme_button.css'
function Theme_button() {
    function turnDark() {
        var element = document.body;
        element.classList.toggle("dark-mode");
    }
    return (
        <>
            <button className='theme' onClick={turnDark}>Turn Dark Mode</button>
        </>
    )
}
export default Theme_button;