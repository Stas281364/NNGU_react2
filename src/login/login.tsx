
import style from "../login/loginform.module.css"
import { TimeCopmonent } from "components/Time";
import { ButtonHTMLAttributes, ChangeEvent, FormEvent, MouseEventHandler, useEffect, useState } from "react";
import { NavLink, Navigate, json } from 'react-router-dom';
import { CeoData } from "Common/Ceo";
import { useDispatch, useSelector } from "react-redux";
import { getAuth, setAuth, setUserData, setisloading, userDataSlice } from "store/UserData";
import { LoginButton } from "./loginButton";

export const LoginForm = () => {
    console.log('loginform');
    const [formState, setFormState] = useState({login: "", password: ""});
    const [dataid, setdataid] = useState(2)
    const dispatch = useDispatch();
    // setLoginState(a => !a);

    function onChange(e: ChangeEvent<HTMLInputElement>) {
        const { name, value } = e.target;
        console.log('name ' + name);
        console.log('value ' + value);

        setFormState((prev) => ({ ...prev, [name]: value }));


    }

    console.log(formState);
    //const response = GetHttpAuthentication(login, pass);

    // fetch('http://localhost:3003/api/shop/post/login',{
    //     method: 'POST',
    //     headers: {
    //         Accept: 'application/json',
    //       'Content-Type': 'application/json'
    //     },
    //     body: JSON.stringify(formState)
    //     }).
    //     then((response) => {
    //         console.log("123")
    //         console.log(response)
    //         return response.json();
    //     })
    //     .then((data) => {
    //         console.log(data.name)
    //         console.log("in fetch ", data.id)
    //         setdataid(data.id)
    //     }).catch(reason => console.log(reason)
    // )
        
    
    const handeSumbit = (e:FormEvent<HTMLFormElement>) =>{
        
        e.preventDefault()
        dispatch(setisloading(true));

        fetch('http://localhost:3003/api/shop/post/login',{
        method: 'POST',
        headers: {
            Accept: 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formState)
        }).
        then((response) => {
            if (!response.ok) throw response
            console.log("123")
            console.log(response)
            return response.json();
        })
        .then((data) => {
           
            console.log(data.name)
            console.log("in fetch ", data.id)
            setdataid(data.id)
            dispatch(setAuth(true));
            dispatch(setUserData(data));
            
           
            
        }).catch(reason => console.log(reason)
        ).finally(()=>{dispatch(setisloading(false));})   
        
    }        
    console.log("AUTH", useSelector(getAuth))
    
    if (useSelector(getAuth))  return <Navigate to="/PageFoundain"/>

    return(
        
        <div>
            <TimeCopmonent/>
            {/* // внешний блок */}
            <div className={style.logform}>
                {/*внутренний внешний блок, чтобы сделать авторизацию по центру */}
                
                
                <div className={style.logform__inside}>

                    

                    <h1 className={style.logform__title}>
                        Мой Shop
                        
                    </h1>
                    
                    <div>
                        <form className={style.logform__form} onSubmit={handeSumbit}>
                            
                            <div className={style.logform__form_login}>
                                <label htmlFor="login">Логин:</label>
                                <input className={style.logform__input_login} type="text" name="login" id="login" onChange={onChange}/>
                            </div>

                            <div className={style.logform__form_password}>
                                <label htmlFor="password">Пароль:</label>
                                <input className={style.logform__input_password} type="text" name="password" id="password" onChange={onChange}/>
                            </div>
                            
                            {/* <NavLink  to="/" className={style.logform__input_button__NavLink} type="type=">   
                                
                            </NavLink> */}
                            <button type="submit" >Войти</button>
                        
                        </form>
                    </div>
                    

                </div>  
                
            </div>
        </div>
        
        
    )
    
}

async function GetHttpAuthentication() {

    const response = await fetch('http://localhost:3003/api/shop');
    let resjason = null;
    if (response.ok) { // если HTTP-статус в диапазоне 200-299
    // получаем тело ответа (см. про этот метод ниже)
    resjason = await response.json();
    //console.log(resjason);
    //console.log(resjason[0].name);
    
    return [{login: resjason[0].login, password: resjason[0].password},
    {login: resjason[1].login, password: resjason[1].password}];
    } else {
    alert("Ошибка HTTP: " + response.status);
    return 0;
    }

    
}
