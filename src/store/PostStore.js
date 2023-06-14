import {makeAutoObservable} from "mobx";
import {addPost} from "../http/postApi";

export class PostStore {
    constructor() {
        this._posts = [];
        makeAutoObservable(this);
    }

    async add(dataObj) {
        const data = await addPost(dataObj);
        this._posts = [...this._posts, data]
    }

    getAll() {
        return this._posts;
    }
}
