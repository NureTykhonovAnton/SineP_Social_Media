import {$authHost, $host} from "./index";
import {LOGIN_URL, REGISTRATION_URL, CHECK_URL} from "../urls";
import jwtDecode from "jwt-decode";

export const registration = async (dataObj) => {
    const {data} = await $host.post(REGISTRATION_URL, dataObj);
    localStorage.setItem('token', data.token);
    return {
        user: data.user
    };
}

export const login = async (email, password) => {
    const {data} = await $host.post(LOGIN_URL, {email, password});
    localStorage.setItem('token', data.token);
    return jwtDecode(data.token);
}

export const check = async () => {
    const {data} = await $authHost.get(CHECK_URL);
    localStorage.setItem('token', data.token);
    return jwtDecode(data.token);
}