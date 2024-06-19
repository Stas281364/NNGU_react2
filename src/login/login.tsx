
import style from "../login/loginform.module.css"
import { TimeCopmonent } from "components/Time";
import { NavLink } from 'react-router-dom';

export const LoginForm = () => {
    console.log('loginform');
    
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

                            <NavLink to="/123" className={style.logform__input_button__NavLink}>
                                <button type="submit" className={style.logform__input_button}>Войти</button>
                            </NavLink>
                        
                        </form>
                    </div>
                    

                </div>  
                
            </div>
        </div>
        
        
    )
}