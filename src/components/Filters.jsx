import { useContext } from "react";
import filtersStyles from "./Filters.module.css"
import FilterContext from "../FilterContext";


const Filters = ()=>{
    const filtres = ["All","Easy","Moderate","Difficult","Very Difficult"];

    const changeFilter = useContext(FilterContext);

    return (
        <div className={filtersStyles["for-div"]}>
            {filtres.map((value,index)=>
            <button key={index} className={filtersStyles.btn} onClick={()=>changeFilter(value)}>{value}</button>
            )}
        </div>
    );
}


export default Filters;