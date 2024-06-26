import { Link, NavLink } from "react-router-dom"
import style from "./loginform.module.css"
import { useSelector } from "react-redux"
import { getAuth, getisloading } from "store/UserData"
import { PageFoundain } from "CascadePages/PageFoundain/PageFoundain"
import { LoginPage } from "Pages/LoginPage"


export const LoginButton = () => {

    
    return(

        <NavLink to="/" className={style.logform__input_button__NavLink}>   
            <button>Войти</button>
        </NavLink>     
    )
        


    
    
}


