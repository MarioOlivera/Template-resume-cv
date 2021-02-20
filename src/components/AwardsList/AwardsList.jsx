import React from 'react'
import AwardItem from './AwardItem'

const AwardsList = () => {

    return (
        <section className="resume-section" id="awards">
            <div className="resume-section-content">
                <h2 className="mb-5">Awards & Certifications</h2>
                <ul className="fa-ul mb-0">
                    <AwardItem></AwardItem>
                </ul>
            </div>
        </section>
    )
}

export default AwardsList;