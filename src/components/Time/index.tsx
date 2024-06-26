import { LoginForm } from "login/login";
import { ReactNode, useEffect, useState } from "react";
import style from "./TimeComponent.module.css"


export const TimeCopmonent = () =>{
    // console.log("time");
    const Time = new Date();
    const TimeNow = (Time.getHours() < 10 ? "0" : "") + Time.getHours() + " : " +  
    (Time.getMinutes() < 10 ? "0" : "") + Time.getMinutes() + " : " +
    (Time.getSeconds() < 10 ? "0" : "") + Time.getSeconds();

    
    
    const[MyTimer,SetMytimer] = useState(TimeNow);
    
    useEffect( ()=>{

        const timer_id = setInterval(()=>{
            SetMytimer(prev => prev + 1);
        },1000);
        
        return () =>{
            clearInterval(timer_id);
        }
    }, [MyTimer]);

    return(
        
        <div className={style.time}>
            {TimeNow}
        </div>
        
        
        
    )
}