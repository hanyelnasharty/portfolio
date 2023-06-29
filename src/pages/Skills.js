import React from "react" 

const Skills = () => {
    return (
        <>
            <div className="skills-container">
                <h1 id="skills">Skills</h1>
                <div className="logos">
                    <h2 id="tools">PROGRAMMING LANGUAGES & TOOLS</h2>
                    <ion-icon name="logo-html5"></ion-icon>
                    <ion-icon name="logo-javascript"></ion-icon>
                    <ion-icon name="logo-css3"></ion-icon>
                    <ion-icon name="logo-python"></ion-icon>
                    <img className="logo" src="sql.png" alt="" />
                    <ion-icon name="logo-react"></ion-icon>
                    <ion-icon name="logo-npm"></ion-icon>
                    <ion-icon name="logo-wordpress"></ion-icon>
                    <img className="logo" src="bootstrap.png" alt="" />
                    <img className="logo" src="django.png" alt="" />
                    <img className="logo" src="jquery.png" alt="" />
                    <img className="logo" src="mongodb.png" alt="" />
                </div>
                <h2 id="tools"><a href="https://docs.google.com/document/d/1qxBjEfIZtuMUlZAJYylX8zlPFHXxgciX/edit#heading=h.gjdgxs" target="_blank" rel="noreferrer">RESUME</a></h2>
            </div>
        </>
    )
}
export default Skills