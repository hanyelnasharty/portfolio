import React from "react"

const Projects = () => {
    return (
        <>
            <div className="projects-container">
                <h1 id="projects">Projects</h1>
                <div className="projectss">
                    <h2><a href="https://github.com/hanyelnasharty/Listingz" target="_blank" rel="noreferrer">Listingz</a> | <span id="info">A full CRUD Real Estate listing app</span></h2>
                    <span>Node.js, Express.js, Mongoose, EJS</span>
                    <h2><a href="https://github.com/hanyelnasharty/empire-motors" target="_blank" rel="noreferrer">Empire Motors</a> | <span id="info">A full CRUD Car listing app</span></h2>
                    <span>Mongoose, Express.js, React.js, Node.js</span>
                    <h2><a href="https://github.com/smmyl/ecommerce-frontend" target="_blank" rel="noreferrer">SwiftShop</a> | <span id="info">A full CRUD E-commerce mockup app</span></h2>
                    <span>Python, Django, React.js, PSQL, Bootstrap</span>
                    <h2><a href="https://github.com/hanyelnasharty/xpoeg-frontend" target="_blank" rel="noreferrer">XPOEG</a> | <span id="info">A full CRUD Travel Guide app</span></h2>
                    <span>Python, Django, React.js, PSQL</span>
                </div>
            </div>
            
        </>
    )
}
export default Projects