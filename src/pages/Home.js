import React from "react"

const Home = () => {
    return (
        <>
            <div className="home-container">
                <h1 id="home-head">HANY <br/><span>ELNASHARTY</span><br/><span id="info">NYC | NY | <span id="email">hany.m.elnasharty@gmail.com</span></span></h1>
                <p>I'm Hany Elnasharty, a detail-oriented web developer with a finance background. I'm currently developing my programming skills independently after completing an intensive, 450 hours, coding bootcamp at General Assembly to become a more expirenced web developer. My goal is to pursue a career in the tech industry and advance my analytical abilities in this field.
                </p>
                <div className="social">
                    <a href="https://www.linkedin.com/in/hany-elnasharty/" target="_blank" rel="noreferrer"><ion-icon name="logo-linkedin"></ion-icon></a>
                    <a href="https://github.com/hanyelnasharty" target="_blank" rel="noreferrer"><ion-icon name="logo-github"></ion-icon></a>
                </div>
                
            </div>
            
        </>
        
    )
}

export default Home