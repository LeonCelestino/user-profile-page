import React from 'react'
import Aside from '../../components/home/Aside'
import About from '../../components/home/About'

import HomeStyle from '../../styles/Home.module.css'

function Home() {
    return (
        <section className={HomeStyle.homeWrap}>
            <Aside />
            <About />
        </section>

    )
}

export default Home