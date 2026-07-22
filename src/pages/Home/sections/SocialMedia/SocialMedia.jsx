import "../SocialMedia/SocialMedia.css"
import whatsappLogo from "../../../../assets/images/logo-whatsapp.svg"
import githubLogo from "../../../../assets/images/logo-github.svg"
import gmailLogo from "../../../../assets/images/logo-gmail.svg"

function SocialMedia() {
    return (
        <div id="social-media">
            <h2 id="social-title">SOCIAL MEDIA</h2>
            <nav id="logos">
                <a href="https://wa.me/5547992263325" target="_blank" rel="noopener noreferrer">
                    <img id="logo-whatsapp" src={whatsappLogo} alt="logo-whatsapp" />
                </a>
                <a href="https://github.com/israviei255" target="_blank" rel="noopener noreferrer">
                    <img id="logo-github" src={githubLogo} alt="logo-github" />
                </a>
                <a href="https://mail.google.com/mail/?view=cm&fs=1&to=isra.viei25@gmail.com" target="_blank" rel="noopener noreferrer">
                    <img id="logo-gmail" src={gmailLogo} alt="logo-gmail" />
                </a>
            </nav>
        </div>
    )
}

export default SocialMedia