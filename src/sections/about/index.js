import React from 'react'
import Particles from 'react-particles-js';
import Progress from 'components/progress'
import { Row, Col } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin, faTwitch, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons'
import ThemeContext from '../../context'
import './styles.scss'

class Hero extends React.Component {

    static contextType = ThemeContext

    render() {
        return (
            <section id={`${this.props.id}`} className="about" style={{height: this.context.height}}>
                {this.particles()}
                <Row>
                    <Col md={6} className="content">
                        <div className="content-text">
                            <div className="line-text">
                                <h4>About Me</h4>
                            </div>
                            <h3>I'm a web developer living in Indianapolis, IN</h3>
                            <div className="separator" />
                            <p>I have been working in web development for 2+ years. I enjoy critical thinking about solutions to complicated problems. My coding interests expand from creating and managing databases to writing smart contracts for the ethereum blockchain. I've developed a love for learning and always am looking to expand my knowledge.</p>
                            <div className="social social_icons">
                                <FontAwesomeIcon icon={faGithub} className="social_icon" onClick={() => window.open('https://github.com/0u714w')}/>
                                <FontAwesomeIcon icon={faTwitter} className="social_icon" onClick={() => window.open('https://twitter.com/0u714w')} />
                                <FontAwesomeIcon icon={faTwitch} className="social_icon" onClick={() => window.open('https://www.twitch.tv/outlaw42')} />
                                <FontAwesomeIcon icon={faLinkedin} className="social_icon" onClick={() => window.open('https://www.linkedin.com/in/douglass-enas-a863b8191/')} />
                            </div>
                        </div>
                    </Col>
                    <Col md={6} className="skills">
                            <div className="line-text">
                                <h4>My Skills</h4>
                            </div>
                            <div className="skills-container">
                                <Progress name="Full Stack Development" value={70} delay={1100} />
                                <Progress name="Python" value={80} delay={1100} />
                                <Progress name="PHP" value={60} delay={1100} />
                                <Progress name="SQL" value={65} delay={1100} />
                                <Progress name="Javascript" value={80} delay={1100} />
                                <Progress name="Solidity/Ethereum" value={50} delay={1100} />
                            </div>
                    </Col>
                </Row>
            </section>
        )
    }

    particles() {
        return (
            <Particles
                className="particles"
                params={{
                    "particles": {
                        "number": {
                            "value": 50,
                            "density": {
                                "enable": false,
                                "value_area": 5000
                            }
                        },
                        "line_linked": {
                            "enable": true,
                            "opacity": .5
                        },
                        "size": {
                            "value": 1
                        },
                    },
                    "retina_detect": true
            }}/>
        )
    }

}

export default Hero