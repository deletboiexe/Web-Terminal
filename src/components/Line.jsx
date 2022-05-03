import "../css/Line.css"

function Line({ text }) {
    return <li className="line" key={Date.now()}>{text}</li>
}

export default Line