import React from "react"
import ListingzModal from "../components/Listingz-modal"
import EmpireModal from "../components/Empire-modal"
import SwiftModal from "../components/Swift-modal"
import XpoegModal from "../components/Xpoeg-modal"

const Projects = () => {
    return (
        <>
            <div className="projects-container">
                <h1 id="projects">Projects</h1>
                <div className="projects">
                    <h2><a href="https://github.com/hanyelnasharty/Listingz" target="_blank" rel="noreferrer">Listingz</a> | <span id="info">A full CRUD Real Estate listing app</span></h2>
                    <span>Node.js, Express.js, Mongoose, EJS</span>
                    <ListingzModal />
                    <h2><a href="https://github.com/hanyelnasharty/empire-motors" target="_blank" rel="noreferrer">Empire Motors</a> | <span id="info">A full CRUD Car listing app</span></h2>
                    <span>Mongoose, Express.js, React.js, Node.js</span>
                    <EmpireModal />
                    <h2><a href="https://github.com/smmyl/ecommerce-frontend" target="_blank" rel="noreferrer">SwiftShop</a> | <span id="info">A full CRUD E-commerce mockup app</span></h2>
                    <span>Python, Django, React.js, PSQL, Bootstrap</span>
                    <SwiftModal />
                    <h2><a href="https://github.com/hanyelnasharty/xpoeg-frontend" target="_blank" rel="noreferrer">XPOEG</a> | <span id="info">A full CRUD Travel Guide app</span></h2>
                    <span>Python, Django, React.js, PSQL</span>
                    <XpoegModal />
                </div>
            </div>
            
        </>
    )
}
export default Projects