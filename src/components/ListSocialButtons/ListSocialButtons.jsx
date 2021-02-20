import React from 'react'
import SocialButton from '../Buttons/SocialButton'
import FacebookIcon from './../Icons/FacebookIcon'
import GithubIcon from './../Icons/GithubIcon'
import LinkedinIcon from './../Icons/LinkedinIcon'
import TwitterIcon from './../Icons/TwitterIcon'

const ListSocialButtons = () => {

    return (
        <div className="social-icons">
            <SocialButton link="https://facebook.com/"><LinkedinIcon style={{"width":".625em"}}></LinkedinIcon></SocialButton>
            <SocialButton link="https://facebook.com/"><GithubIcon style={{"width":".625em"}}></GithubIcon></SocialButton>
            <SocialButton link="https://facebook.com/"><TwitterIcon style={{"width":".625em"}}></TwitterIcon></SocialButton>
            <SocialButton link="https://facebook.com/"><FacebookIcon style={{"width":".625em"}}></FacebookIcon></SocialButton>
        </div>
    )
}

export default ListSocialButtons;