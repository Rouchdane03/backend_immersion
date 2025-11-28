import IntroStyles from "./Introduction.module.css"

const Introduction = ()=>{

    return (
            <p className={IntroStyles.intro}>Hey, Welcome ! I'm Rouchdane MOUDJIBOU, I challenged myself to complete 20 backend projects ranging from junior to senior level with pre-established difficulty levels. All project ideas come from this website: 
                <a href="https://roadmap.sh/backend/project-ideas" target="_blank" style={{color:"yellow"}}>
                 https://roadmap.sh/backend/project-ideas
                </a>
            </p>
    )
}

export default Introduction;