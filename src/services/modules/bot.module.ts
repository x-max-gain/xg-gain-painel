import { API } from "../http/api"
import { createBotInformationsType } from "../types/bot";

export const createBotInformations = async (data: createBotInformationsType) => {
    const res = await API.post('/bot', data);
}
