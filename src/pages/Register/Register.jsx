import {InputLabel, MenuItem, Select, TextField} from "@mui/material";
import {useState} from "react";
import {useNavigate} from "react-router";
import {Logo} from "../../components/Register/Logo";
import {AuthButtonGroup} from "../../components/AuthButtonGroup/AuthButtonGroup";
import {LOGIN_ROUTE} from "../../uutils/consts";

import styles from './Register.module.css'

export const Register = () => {
    const [genderValue, setGenderValue] = useState(0);
    const [cityValue, setCityValue] = useState(0);
    const [fieldsChecked, setFieldsChecked] = useState(false);

    const navigate = useNavigate();

    const navigateToLoginPage = () => {
        navigate(LOGIN_ROUTE);
    }


    const handleGenderChange = (event) => {
        const value = event.target.value;
        setGenderValue(value);
    }

    const handleCityChange = (event) => {
        const value = event.target.value;
        setCityValue(value);
    }

    const handleLogIn = () => {
        setFieldsChecked(true);
    }

    return (
        <section className={'flex justify-center ' + styles.RegisterPage}>
            <form className={
                'flex flex-col items-center w-[80%] my-10 ' +
                'p-4 rounded-[2rem] min-[550px]:w-[50%] md:mt-[1rem] md:mb-[1.5rem] md:flex-row md:w-[80%] ' +
                styles.Form
            }>
                <Logo extraStyles={'md:w-[55%]'}/>
                <div className={'flex flex-col items-center'}>
                    <div className={'flex flex-col items-center w-[100%]'}>
                        <div className={'flex'}>
                            <TextField
                                label={'First name'}
                                color={'error'}
                                sx={{
                                    'marginTop': '10px',
                                    'marginRight': '5px',
                                    'width': '100%',
                                    '& .MuiInputBase-root': {
                                        color: 'black'
                                    }
                                }}
                            />
                            <TextField
                                label={'Last name'}
                                color={'error'}
                                sx={{
                                    'marginTop': '10px',
                                    'width': '100%',
                                    '& .MuiInputBase-root': {
                                        color: 'black'
                                    }
                                }}
                                // onChange = {handle}
                            />
                        </div>
                        <div className={'flex flex-col items-center w-[100%]'}>
                            <TextField
                                label={'Login'}
                                color={'error'}
                                sx={{
                                    'marginTop': '10px',
                                    'width': '100%',
                                    '& .MuiInputBase-root': {
                                        color: 'black'
                                    }
                                }}
                            />
                            <TextField
                                label={'Password'}
                                type={'password'}
                                color={'error'}
                                sx={{
                                    'marginTop': '10px',
                                    'width': '100%',
                                    '& .MuiInputBase-root': {
                                        color: 'black'
                                    }
                                }}
                            />
                            <TextField
                                type={'date'}
                                color={'error'}
                                sx={{
                                    'marginTop': '10px',
                                    'width': '100%',
                                    '& .MuiInputBase-root': {
                                        color: 'black'
                                    }
                                }}
                            />
                            <InputLabel id="gender-select">Choose your gender</InputLabel>
                            <Select
                                labelId="gender-select"
                                value={genderValue}
                                color={'error'}
                                onChange={handleGenderChange}
                                sx={{
                                    'width': '100%',
                                    '& .MuiSelect-select': {
                                        color: 'black'
                                    }
                                }}
                            >
                                <MenuItem value={0}>Man</MenuItem>
                            </Select>
                            <InputLabel id="city-select">Choose your city</InputLabel>
                            <Select
                                labelId="city-select"
                                value={cityValue}
                                color={'error'}
                                onChange={handleCityChange}
                                sx={{
                                    'width': '100%',
                                    '& .MuiSelect-select': {
                                        color: 'black'
                                    }
                                }}
                            >
                                <MenuItem value={0}>Kharkiw</MenuItem>
                                <MenuItem value={1}>Uman</MenuItem>
                            </Select>
                            <TextField
                                label={'Phone number'}
                                type={'phone'}
                                color={'error'}
                                sx={{
                                    'marginTop': '10px',
                                    'width': '100%',
                                    '& .MuiInputBase-root': {
                                        color: 'black'
                                    }
                                }}
                            />
                            <TextField
                                label={'Email'}
                                type={'email'}
                                color={'error'}
                                sx={{
                                    'marginTop': '10px',
                                    'width': '100%',
                                    '& .MuiInputBase-root': {
                                        color: 'black'
                                    }
                                }}
                            />

                        </div>
                    </div>
                    <AuthButtonGroup signIn={true}
                                     handleClick={() => {}}
                                     handleGoogleClick={() => {}}
                    />
                    <span className={'text-center hyphens-manual'}>Have already an account? <a onClick={navigateToLoginPage}>Log-in now!</a> </span>
                </div>
            </form>
        </section>
    );
}
