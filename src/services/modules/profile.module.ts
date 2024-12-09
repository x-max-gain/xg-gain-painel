import { addCaching, getCaching } from "../cache/cache";
import { PROFILE_NAME_CACHING } from "../cache/consts";
import { API } from "../http/api"

export const getDataProfile = async () => {
    const time = 60 * 5; // 5 Minutes
    const dataCurrent = getCaching(PROFILE_NAME_CACHING);
    if(!dataCurrent){
        const { data } = await API.get('/users/my');
        addCaching(PROFILE_NAME_CACHING, data, time, '/');
        return data;
    } else {
        return dataCurrent;
    }
}