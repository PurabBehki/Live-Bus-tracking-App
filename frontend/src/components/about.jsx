import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faXTwitter } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import "./about.css";

function About(){
    return (
        <div>
            <h1 className="heading">Track Your Bus</h1>
            <div className="details">With "Track Your Bus" you can now track your bus with its exact location of buses and their estimate arrival of time.It eliminates the stress of waiting at the bus stop and even too early arrival which in return saves customer's time. It provides safe booking options with particular boarding points and arrival points are estimated fare as per distance. Informs passengers of route alterations, emergency conditions, and unexpected delays so you are never left out in the cold.
            </div>
            <p className="contact">
                <h3>Contact Us</h3>
                <div className="contact-icons">
                    <a href="https://www.instagram.com/purabbehki/" target="_blank" rel="noopener noreferrer" title="Instagram">
                        <FontAwesomeIcon icon={faInstagram} />
                    </a>
                    <a href="https://x.com/home" target="_blank" rel="noopener noreferrer" title="X">
                        <FontAwesomeIcon icon={faXTwitter} />
                    </a>
                    <a href="mailto:behkipurab@gmail.com" title="Email">
                        <FontAwesomeIcon icon={faEnvelope} />
                    </a>
                </div>
                <p className="email">Email: <a href="mailto:behkipurab@gmail.com">behkipurab@gmail.com</a></p>
            </p>
        </div>
    );
}

export default About;