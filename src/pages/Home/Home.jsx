import Hero from "../Home/sections/Hero/Hero"
import About from "../Home/sections/About/About"
import Projects from "../Home/sections/Projects/Projects"

import "../Home/Home.css"

function Home() {
    return (
        <>
            <Hero />
            <About />
            <Projects />
        </>
    )
}

export default Home