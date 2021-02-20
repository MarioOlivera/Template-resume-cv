import React from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import ListSocialButtons from './../components/ListSocialButtons'

const About = () => {

    return (
        <Row>
            <Col xs={12}>
                <section className="resume-section" id="about">
                    <div className="resume-section-content">
                        <h1 className="mb-0">
                            Clarence
                            <span className="text-primary">Taylor</span>
                        </h1>
                        <div className="subheading mb-5">
                            3542 Berry Street · Cheyenne Wells, CO 80810 · (317) 585-8468 ·
                            <a href="mailto:name@email.com">name@email.com</a>
                        </div>
                        <p className="lead mb-5">I am experienced in leveraging agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate strategy foster collaborative thinking to further the overall value proposition.</p>
                        <ListSocialButtons></ListSocialButtons>
                    </div>
                </section>
            </Col>
        </Row>
    )
}

export default About