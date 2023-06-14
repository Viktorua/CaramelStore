import {$authHost} from "./index";

export const getAll = async () => {
    const {data} = await $authHost.get('/')
    return data
}