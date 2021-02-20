import React from 'react'
import Container from 'react-bootstrap/Container'
import TheNavegation from './TheNavegation'

const TheLayout = (props) => {

    return (
    <div>
        <TheNavegation {...props}></TheNavegation>
        <Container fluid>
            {props.children}
        </Container>
    </div>)
}

export default TheLayout