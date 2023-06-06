import {$host} from "./index";
import {GENDER} from "../urls";

export const getAllGenders = async (dataObj) => {
    const {data} = await $host.get(GENDER);
    return data;
};
