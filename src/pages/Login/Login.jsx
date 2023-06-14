import {Logo} from "../../components/Register/Logo";
import {useContext, useState} from "react";
import {TextField} from "@mui/material";
import {AuthButtonGroup} from "../../components/AuthButtonGroup/AuthButtonGroup";
import {useNavigate} from "react-router";
import {HOME_ROUTE, REGISTER_ROUTE} from "../../uutils/consts";

import styles from './Login.module.css'
import {Context} from "../../index";
import {observer} from "mobx-react-lite";

export const Login = observer(() => {
    const {user} = useContext(Context);


    const [userObj, setUserObj] = useState({
        nickname: '',
        password: ''
    });

    const handleInputChange = (e, key) => {
        const {value} = e.target;
        setUserObj(prevState => {
            return {
                ...prevState,
                [key]: value
            }
        })
    }

    const navigate = useNavigate();

    const navigateToRegisterPage = () => {
        navigate(REGISTER_ROUTE);
    }

    const navigateToHomePage = () => {
        navigate(HOME_ROUTE);
    }

    const handleLoginClick = async () => {
        const res = await user.login(userObj);
        if(res){
            navigateToHomePage();
        }
    }


    return (
        <section className={'flex justify-center ' + styles.LoginPage}>
            <form className={
                'flex flex-col items-center w-[80%] mt-[3.6rem] mb-[4rem] ' +
                'p-7 rounded-[2rem] min-[550px]:w-[50%] md:mt-[6rem] md:mb-[6.8rem] md:flex-row md:w-[80%] ' +
                styles.Form
            }>
                <Logo extraStyles={'md:w-[55%]'}/>
                <div className={'flex flex-col items-center w-[100%]'}>
                    <div className={'flex flex-col w-full'}>
                        <TextField
                            label={'Login'}
                            sx={{
                                'marginTop': '10px',
                                'width': '100%',
                                '& .MuiInputBase-root': {
                                    'color': 'black'
                                }
                            }}
                            value={userObj.nickname}
                            onChange={(e) => handleInputChange(e, 'nickname')}
                        />
                        <TextField
                            label={'Password'}
                            type={'password'}
                            sx={{
                                'marginTop': '10px',
                                'width': '100%',
                                '& .MuiInputBase-root': {
                                    'color': 'black'
                                }
                            }}
                            value={userObj.password}
                            onChange={(e) => handleInputChange(e, 'password')}
                        />
                    </div>
                    <AuthButtonGroup signIn={false}
                                     handleClick={handleLoginClick}
                                     handleGoogleClick={() => {
                                     }}
                                     color={'blue'}
                    />
                    <span className={'text-center'}>Don`t have an account yet? <a onClick={navigateToRegisterPage}>Sign-in now!</a> </span>
                </div>
            </form>
        </section>
    );
});
