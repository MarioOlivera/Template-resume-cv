import React from 'react'
import ListSocialButtons from './../ListSocialButtons'

import './styles.css'

const ResumeSection = () => {

    return (
        <section className="resume-section" id="about">
            <div className="resume-section-content">
                <h1 className="title mb-0">
                    Mario
                    <span className="text-primary"> Olivera</span>
                </h1>
                <div className="subheading mb-5">
                    Argentina - (+54 11 52525252)
                    &nbsp;<a href="mailto:name@email.com">name@email.com</a>
                </div>
                <p className="lead mb-5">I am experienced in leveraging agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate strategy foster collaborative thinking to further the overall value proposition.</p>
                <ListSocialButtons></ListSocialButtons>
            </div>
        </section>
    )
}

export default ResumeSection