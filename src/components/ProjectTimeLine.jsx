import Timeline from '@mui/lab/Timeline'
import TimelineItem , { timelineItemClasses } from '@mui/lab/TimelineItem'
import TimelineSeparator from '@mui/lab/TimelineSeparator'
import TimelineConnector from '@mui/lab/TimelineConnector'
import TimelineContent from '@mui/lab/TimelineContent'
import TimelineDot from '@mui/lab/TimelineDot'
import Item from './Item';
import projectsList from '../projects-items'
import prjTimelineStyles from "./ProjectTimeline.module.css"


const ProjectTimeLine = ({filtre})=>{

    return (
        <article >
            <div className={prjTimelineStyles.active1}>
                <Timeline position="alternate">
                    <ItemList unFiltre={filtre}/>
                </Timeline>
            </div>

            <div className={prjTimelineStyles.active2}>
                <Timeline
                        sx={{
                            [`& .${timelineItemClasses.root}:before`]: {
                            flex: 0,
                            padding: 0,
                            },
                        }}
                        >
                        <ItemList unFiltre={filtre}/>
                </Timeline>
            </div>  
       </article>
    )
}


const OneProject = ({onePrj})=>{
    return (
        <>
            <TimelineItem >
                <TimelineSeparator>
                    <TimelineDot variant="outlined" />
                    <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent>
                        <Item aProject={onePrj}/>
                </TimelineContent>
            </TimelineItem>
        </>
    )
}

const ItemList = ({unFiltre})=>{
    return (
        <>
            {
                (unFiltre==="All"? projectsList.map((value,index)=>(
                        <OneProject key={index} onePrj={value}/>
                    )):
                    projectsList.filter(prj=>prj.difficulty===unFiltre).map(
                    (val,idx)=>(
                        <OneProject key={idx} onePrj={val}/>
                    )
                ))
            }
        </>
    )
}


export default ProjectTimeLine;





