import React from 'react'
import '../styles/Footer.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faCopyright } from '@fortawesome/free-regular-svg-icons'

function Footer() {
    return (
        <div className="footer-container noselect">
            <div className="footer-content">
                <div className="github-plug">
                <a href="https://github.com/elBoch" target="_blank" rel="noopener noreferrer" >
                    <div className="footer-item">
                        <FontAwesomeIcon icon={faGithub} />{'\u00A0'}
                        <p>elBoch</p>
                    </div>
                </a>
                <a href="https://github.com/Ionas208/" target="_blank" rel="noopener noreferrer" >
                    <div className="footer-item">
                        <FontAwesomeIcon icon={faGithub} />{'\u00A0'}
                        <p>Ionas208</p>
                    </div>
                </a>
                </div>
                <div>
                    Seidlserver <FontAwesomeIcon icon={faCopyright} />
                </div>
            </div>
        </div>
    )
}

export default Footer
