import style from './ContentObject.module.css'


export const ContentObject =() =>{

    return(
        <div className={style.grid}>
            <div className={style.content}>
                im content object<br></br>
                im content object<br></br>
                im content object<br></br>
            </div>

            <div className={style.content}>
                and im content object
            </div>
        </div>
        
    )
}