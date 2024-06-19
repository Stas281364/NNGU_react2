import { ReactNode } from "react"
import style from './root.module.css'
import { Outlet } from "react-router-dom"
import { PageFoundain } from "CascadePages/PageFoundain/PageFoundain"
import { LoginForm } from "login/login"


export const Root = () => {
    return(
        
        <PageFoundain/>
        
    )

}