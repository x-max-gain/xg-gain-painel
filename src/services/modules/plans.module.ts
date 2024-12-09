import { API } from "../http/api"

export const getAllPlans = async () => {
    const { data } = await API.get('/plans');
    return data;
}