import { Height } from "@mui/icons-material"
import ItemStyles from "./Item.module.css"
import GitHubIcon from '@mui/icons-material/GitHub'
import LaunchIcon from '@mui/icons-material/Launch'

const Item = ({aProject})=>{


    const levelStyles = {
        backgroundColor:aProject.color,
        color:"black",
        borderRadius:15,
        padding:3,
        height:20
       
    }
    return (
        <section className={ItemStyles.box}>
            
                <div className={ItemStyles["first-line"]}>
                    <span style={{color:"#c2bd28ff",fontWeight:"bold"}}> <em>{aProject.order}-</em> {aProject.titre}</span>
                    <span style={levelStyles}>{/*{aProject.difficulty}*/}</span>
                </div>

                <div className={ItemStyles["second-line"]}>
                    <a href="#" style={{marginRight:15}} target="_blank"><GitHubIcon/>Repository</a>
                    <a href="#" target="_blank">Website<LaunchIcon/></a>
                </div>
           
        </section>
    )
}

export default Item;