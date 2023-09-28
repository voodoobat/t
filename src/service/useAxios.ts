import axios, { AxiosRequestConfig, Method } from 'axios'

export const useAxios = async <T>(method: Method, url: string, requestConfig?: AxiosRequestConfig) => {
    try {
        const response = await axios.request<T>({
            baseURL: 'http://www.filltext.com',
            url,
            method,
            ...requestConfig,
        })

        return { data: response.data }
    } catch (error) {
        return { error }
    }
}
