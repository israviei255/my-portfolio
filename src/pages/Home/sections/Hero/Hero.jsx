import "../Hero/Hero.css"
import "../Hero/HeroAbout.css"
import "../Hero/HeroProjects.css"

function Hero() {

    return (
        <section id="hero">
            <nav id="menu">
                <div id="menu-top">
                    <a href="#">
                        Redes Sociais
                    </a>
                    <a href="#projects" id="nav-projects">
                        Projects
                    </a>
                </div>
                <div id="menu-bottom">
                    <a href="#about-me" id="nav-about">
                        About me
                    </a>
                </div>
            </nav>
            <h2 id="my-name">Israel A. Vieira</h2>
            <h3 id="my-profession">Web Developer</h3>
        </section>
    )
}

export default Hero