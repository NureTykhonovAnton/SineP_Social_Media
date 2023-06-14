import {$authHost} from "./index";
import {POST} from "../urls";

export const addPost = async (dataObj) => {
    const data = await $authHost.post(POST, dataObj);
    return data.post;
};
