import "../Hero/Hero.css"
import "../Hero/HeroAbout.css"
import "../Hero/HeroProjects.css"
import "../Hero/HeroSocial.css"

function Hero() {

    return (
        <section id="hero">
            <nav id="menu">
                <div id="menu-top">
                    <a href="#social-media" id="nav-social">
                        SOCIAL MEDIA
                    </a>
                    <a href="#projects" id="nav-projects">
                        PROJECTS
                    </a>
                </div>
                <div id="menu-bottom">
                    <a href="#about-me" id="nav-about">
                        ABOUT ME
                    </a>
                </div>
            </nav>
            <h2 id="my-name">Israel A. Vieira</h2>
            <h3 id="my-profession">Web Developer</h3>
        </section>
    )
}

export default Hero