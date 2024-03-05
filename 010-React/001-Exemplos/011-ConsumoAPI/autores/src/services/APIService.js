import axiosInstance from "../helper/axiosInstance";

export async function axiosService(configRequest) {
    const {method, url, data, head} = configRequest
    
    console.log(data);
    console.log(head);

    const res = await axiosInstance[method](url, data, head)

    return res.data
}