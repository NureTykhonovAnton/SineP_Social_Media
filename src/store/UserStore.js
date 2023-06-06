import {makeAutoObservable} from 'mobx'
import {login, registration} from "../http/userApi";

export class UserStore {
    constructor() {
        this._isAuth = true;
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
        console.log(data)
        if(data){
            this.setUser(data.token);
            this.setAuth(true);
            return true;
        }

        return false;
    }

    getAuth() {
        return this._isAuth;
    }

    getUser() {
        return this._user;
    }
}
