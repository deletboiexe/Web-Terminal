import "../css/Input.css"

function Input() {
    return (
        <form id="form" action="">
            <input id="cmdinput" autoComplete="off" placeholder="Enter command... (Press LCTRL to auto-select this field)"/>
        </form>
    )
}

export default Input