import {makeAutoObservable} from 'mobx'

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

    getAuth() {
        return this._isAuth;
    }

    getUser() {
        return this._user;
    }
}
