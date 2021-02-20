import React from 'react'
import ExperienceItem from './ExperienceItem'

const ExperienceList = () => {

    return (
        <section className="resume-section" id="experience">
            <div className="resume-section-content">
                <h2 className="mb-5">Experience</h2>
                <ExperienceItem></ExperienceItem>
            </div>
        </section>
    )
}

export default ExperienceList