import axios from "axios"
import { HOST_API } from "../config";

const axiosApiInstance = axios.create();

axiosApiInstance.defaults.baseURL = HOST_API

axiosApiInstance.interceptors.request.use(

  async (config: any) => {

    config.url = `${axiosApiInstance.defaults.baseURL}${config.url}`

    return config;
  },
  (error:any) => {
    Promise.reject(error)
  },
) 

export default axiosApiInstance;