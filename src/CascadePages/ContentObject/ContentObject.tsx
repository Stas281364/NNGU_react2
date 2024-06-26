import { CeoData, CeoDataProps, Iceo } from 'Common/Ceo'
import style from './ContentObject.module.css'
import { ReactNode, useEffect } from 'react'
import { getid, getname, getsecond_name } from 'store/UserData'
import { useSelector } from 'react-redux'

export type Tmandata = {
    name: string | null,
    secondname: string | null,
}

export type TlistmandataProps = {
    listdata:Tmandata[]
}

//{listdata}:TlistmandataProps
export const ContentObject = () =>{
    
    const ceo_id = useSelector(getid)
    const ceo_name = useSelector(getname)
    const ceo_secondname = useSelector(getsecond_name)

    return(
        <div className={style.content}>
           Добро пожаловать <br></br> 
           {ceo_id} {ceo_name} {ceo_secondname}
           
        </div>
        
    )
}