
import style from "../login/loginform.module.css"
import { TimeCopmonent } from "components/Time";
import { useState } from "react";
import { NavLink, json } from 'react-router-dom';

export const LoginForm = () => {
    console.log('loginform');
    const [login, setlogin] = useState("");
    const [pass, setpass] = useState("");

    //const response = GetHttpAuthentication(login, pass);
    fetch('http://localhost:3003/api/shop')
    .then((response) => response.json())
    .then((response) => {
        console.log(response);
        setlogin((login) => login = response[0].login);
        setpass((pass) => pass = response[0].password);
    })
    .catch((reason) => console.log(reason))
    
    
    console.log(login);
    console.log(pass);
    

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
                        <form className={style.logform__form} method="">
                            
                            <div className={style.logform__form_login}>
                                <label htmlFor="login">Логин:</label>
                                <input className={style.logform__input_login} type="text" name="login" id="login" />
                            </div>

                            <div className={style.logform__form_password}>
                                <label htmlFor="password">Пароль:</label>
                                <input className={style.logform__input_password} type="text" name="password" id="password" />
                            </div>

                            <NavLink to="/PageFoundain" className={style.logform__input_button__NavLink}>
                                <button type="submit" className={style.logform__input_button}>Войти</button>
                            </NavLink>
                        
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

