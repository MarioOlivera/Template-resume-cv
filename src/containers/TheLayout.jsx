import React from 'react'
import TheNavegation from './TheNavegation'

const TheLayout = ({children}) => {

    return (
    <div>
        <TheNavegation></TheNavegation>
        {children}
    </div>)
}

export default TheLayout