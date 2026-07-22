import Hero from "../Home/sections/Hero/Hero"
import About from "../Home/sections/About/About"
import Projects from "../Home/sections/Projects/Projects"
import SocialMedia from "../Home/sections/SocialMedia/SocialMedia"
import Footer from "../Home/sections/Footer/Footer"

import "../Home/Home.css"

function Home() {
    return (
        <div id="home">
            <Hero />
            <About />
            <Projects />
            <SocialMedia />
            <Footer />
        </div>
    )
}

export default Home