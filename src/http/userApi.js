import {$authHost, $host} from "./index";
import {LOGIN_URL, REGISTRATION_URL, CHECK_URL} from "../urls";
import jwtDecode from "jwt-decode";

export const registration = async (dataObj) => {
    const {data} = await $host.post(REGISTRATION_URL, dataObj);
    localStorage.setItem('token', data.token);
    return jwtDecode(data.token);
}

export const login = async (dataObj) => {
    try{
        const {data} = await $host.post(LOGIN_URL, dataObj);
        localStorage.setItem('token', data.token);
        return jwtDecode(data.token);
    } catch (e) {
        console.log(e);
        alert(e.message);
    }
}

export const check = async () => {
        const {data} = await $authHost.get(CHECK_URL);
        localStorage.setItem('token', data.newToken);
        return jwtDecode(data.newToken);
}
