import { ReactNode } from "react"
import style from "./Panel.module.css"


// {children}: {children:ReactNode}

export const Panel = () =>{

    return(

        <div className={style.panel}>
            <div className={style.panel__inside}>
                <li>Мой Shop</li>
                <li>Fixme</li>
                <li>Fixme</li>
            </div>
            
        </div>
        
        
    )
}