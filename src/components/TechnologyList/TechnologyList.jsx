import React from 'react'
import Html5Icon from './../Icons/Html5Icon'
import Css3Icon from './../Icons/Css3Icon'
import JsIcon from './../Icons/JsIcon'
import ReactIcon from './../Icons/ReactIcon'

const TechnologyList = () => {
    return (
        <ul className="list-inline dev-icons">
            <li className="list-inline-item"><Html5Icon style={{"width":"36px"}}></Html5Icon></li>
            <li className="list-inline-item"><Css3Icon style={{"width":"36px"}}></Css3Icon></li>
            <li className="list-inline-item"><JsIcon style={{"width":"36px"}}></JsIcon></li>
            <li className="list-inline-item"><ReactIcon style={{"width":"36px"}}></ReactIcon></li>
        </ul>
    )
}

export default TechnologyList