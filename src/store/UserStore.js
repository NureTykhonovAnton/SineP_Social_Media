import {makeAutoObservable} from 'mobx'
import {check, login, registration} from "../http/userApi";

export class UserStore {
    constructor() {
        this._isAuth = false;
        this._user = {};

        makeAutoObservable(this);
    }

    setAuth(auth) {
        this._isAuth = auth;
    }

    setUser(user) {
        this._user = user;
    }

    async register(user) {
        const data = await registration(user);
        this.setUser(data.user);
        this.setAuth(true);
    }

    async login(user) {
        const data = await login(user);
        if(data){
            this.setUser(data);
            this.setAuth(true);
            return true;
        }

        return false;
    }

    async check(token){
        const data = await check(token);
        this.setUser(data);
        this.setAuth(true);
    }

    async fetchUser() {
        const token = localStorage.getItem('token');
        if (token) {
            this.check(token);
            return true;
        } else {
            return false;
        }
    }

    getAuth() {
        return this._isAuth;
    }

    getUser() {
        return this._user;
    }
}
