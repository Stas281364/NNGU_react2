import { BaseDiv } from "CascadePages/BaseDiv/BaseBiv";
import { MainContent } from "CascadePages/MainContent/MainContent";
import { Panel } from "components/Panel/panel";
import { TimeCopmonent } from "components/Time";
import { LoginForm } from "login/login";
import { ReactNode } from "react";
import { Outlet } from "react-router-dom";



export const PageFoundain = () => {
    

    return(
        
        
        <BaseDiv>
            <Panel/>
            <MainContent>
                
                <TimeCopmonent/>
                <Outlet/>
    
            </MainContent>
            
        </BaseDiv>
        
    )
}