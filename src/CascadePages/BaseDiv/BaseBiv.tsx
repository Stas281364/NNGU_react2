import { ReactNode } from "react";
import style from './BaseDiv.module.css'


export const BaseDiv = ({children}:{children:ReactNode}) =>{

    return <div className={style.basediv}>{children}</div>
}