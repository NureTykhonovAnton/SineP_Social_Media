import {makeAutoObservable} from 'mobx'
import {getAllGenders} from "../http/genderApi";

export class GenderStore {
    constructor() {
        this._genders = [];

        makeAutoObservable(this);
    }

    get genders() {
        return this._genders;
    }

    async fetchGenders(){
        const data = await getAllGenders();
        this._genders = data.genders;
    }
}
