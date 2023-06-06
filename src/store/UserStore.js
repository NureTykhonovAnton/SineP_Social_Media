import {makeAutoObservable} from 'mobx'
import {registration} from "../http/userApi";

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

    getAuth() {
        return this._isAuth;
    }

    getUser() {
        return this._user;
    }
}
