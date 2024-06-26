import { BaseDiv } from "CascadePages/BaseDiv/BaseBiv";
import { MainContent } from "CascadePages/MainContent/MainContent";
import { Panel } from "components/Panel/panel";
import { TimeCopmonent } from "components/Time";
import { LoginForm } from "login/login";
import { ReactNode } from "react";
import { useDispatch } from "react-redux";
import { Outlet } from "react-router-dom";
import { setAuth } from "store/UserData";



export const PageFoundain = () => {
    const dispatch = useDispatch();
    dispatch(setAuth(false));
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


