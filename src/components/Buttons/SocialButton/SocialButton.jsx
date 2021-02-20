import React from 'react'
import './styles.css'

const SocialButton = ({link,children}) => {

    return (
        <a className="social-button" href={link} target="_blank">
            {children}
        </a>
    )
}

export default SocialButton