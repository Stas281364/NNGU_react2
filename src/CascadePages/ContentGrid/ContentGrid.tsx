import style from "./ContentGrid.module.css"
import { ContentObject, TlistmandataProps } from "CascadePages/ContentObject/ContentObject"


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