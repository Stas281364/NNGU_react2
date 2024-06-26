import { ReactNode, useEffect, useState } from "react"
import style from "./ContentGrid.module.css"
import { ContentObject, TlistmandataProps, Tmandata } from "CascadePages/ContentObject/ContentObject"
import { Iceo ,CeoData, CeoDataProps } from "Common/Ceo"
import { useSelector } from "react-redux"
import { getid, getname, getsecond_name } from "store/UserData"

// type PostCardProps = {
//     postData: Article;
// };

//Myprops:Iceo
export const ContentGrid = () =>{
    
    
    
    const mas:TlistmandataProps = {
        listdata: [],
    } 
    // console.log("ceo_name ", ceo_name)

    // mas.listdata[0].name = ceo_name;
    // mas.listdata[0].secondname = ceo_secondname;
    return(

        <div className={style.grid}>
            {/* <ContentObject listdata={mas.listdata} /> */}
            <ContentObject/>
        </div>
    ) 
}