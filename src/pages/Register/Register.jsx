import {InputLabel, MenuItem, Select, TextField} from "@mui/material";
import {useContext, useState} from "react";
import {useNavigate} from "react-router";
import {Logo} from "../../components/Register/Logo";
import {AuthButtonGroup} from "../../components/AuthButtonGroup/AuthButtonGroup";
import {HOME_ROUTE, LOGIN_ROUTE} from "../../uutils/consts";

import styles from './Register.module.css'
import {Context} from "../../index";
import {observer} from "mobx-react-lite";

export const Register = observer(() => {
    const {user, gender} = useContext(Context);

    const allGenders = gender.genders;


    const [formData, setFormData] = useState({
        name: '',
        surname: '',
        nickname: '',
        password: '',
        birthday: '',
        country: '',
        city: '',
        email: '',
        phone: '',
        genderId: null,
        avatar: '',
        profile_description: ''
    });

    const handleInputChange = (event, name) => {
        const {value} = event.target;
        setFormData(prevState => {
            return {
                ...prevState,
                [name]: value
            }
        });
    }

    const navigate = useNavigate();

    const navigateToLoginPage = () => {
        navigate(LOGIN_ROUTE);
    }

    const navigateToHomePage = () => {
        navigate(HOME_ROUTE);
    }

    const handleRegister = () => {
        user.register(formData);
        navigateToHomePage()
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
                                value={formData.name}
                                onChange={(e) => handleInputChange(e, 'name')}
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
                                value={formData.surname}
                                onChange={(e) => handleInputChange(e, 'surname')}
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
                                value={formData.nickname}
                                onChange={(e) => handleInputChange(e, 'nickname')}
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
                                value={formData.password}
                                onChange={(e) => handleInputChange(e, 'password')}
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
                                value={formData.birthday}
                                onChange={(e) => handleInputChange(e, 'birthday')}
                            />
                            <InputLabel id="gender-select">Choose your gender</InputLabel>
                            <Select
                                labelId="gender-select"
                                value={formData.genderId}
                                color={'error'}
                                onChange={(e) => handleInputChange(e, 'genderId')}
                                sx={{
                                    'width': '100%',
                                    '& .MuiSelect-select': {
                                        color: 'black'
                                    }
                                }}
                            >
                                {
                                    allGenders.map(({id, name}) => {
                                        return <MenuItem value={id} key={id}>
                                            {name}
                                        </MenuItem>
                                    })
                                }
                            </Select>
                            <TextField
                                value={formData.country}
                                color={'error'}
                                label={'Country'}
                                onChange={(e) => handleInputChange(e, 'country')}
                                sx={{
                                    'marginTop': '10px',
                                    'width': '100%',
                                    '& .MuiInputBase-root': {
                                        color: 'black'
                                    }
                                }}
                            >
                            </TextField>
                            <TextField
                                value={formData.city}
                                color={'error'}
                                label={'City'}
                                onChange={(e) => handleInputChange(e, 'city')}
                                sx={{
                                    'marginTop': '10px',
                                    'width': '100%',
                                    '& .MuiInputBase-root': {
                                        color: 'black'
                                    }
                                }}
                            >
                            </TextField>
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
                                value={formData.phone}
                                onChange={(e) => handleInputChange(e, 'phone')}
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
                                value={formData.email}
                                onChange={(e) => handleInputChange(e, 'email')}
                            />

                        </div>
                    </div>
                    <AuthButtonGroup signIn={true}
                                     handleClick={handleRegister}
                                     handleGoogleClick={() => {}}
                    />
                    <span className={'text-center hyphens-manual'}>Have already an account? <a onClick={navigateToLoginPage}>Log-in now!</a> </span>
                </div>
            </form>
        </section>
    );
});
