import { Children, ReactNode } from "react";
import style from './MainConent.module.css'


export const MainContent = ({children}:{children:ReactNode}) => {

    return(
        <div className={style.maincontent}>{children}</div>
    )

}