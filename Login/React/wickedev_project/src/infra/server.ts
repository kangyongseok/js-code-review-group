import Axios, { AxiosInstance, CancelToken } from 'axios'

export interface IRequestConfig {
    url?: string
    method?: string
    baseURL?: string
    headers?: any
    params?: any
    paramsSerializer?: (params: any) => string
    data?: any
    timeout?: number
    withCredentials?: boolean
    responseType?: string
    xsrfCookieName?: string
    xsrfHeaderName?: string
    onUploadProgress?: (progressEvent: any) => void
    onDownloadProgress?: (progressEvent: any) => void
    maxContentLength?: number
    validateStatus?: (status: number) => boolean
    maxRedirects?: number
    httpAgent?: any
    httpsAgent?: any
    cancelToken?: CancelToken
}

export class Server {
    private readonly requestor: AxiosInstance

    constructor(baseURL: string) {
        this.requestor = Axios.create({
            baseURL
        })
    }

    public async request<T = any>(config: IRequestConfig): Promise<T> {
        const response = await this.requestor.request(config)
        return response.data
    }

    public async get<T = any>(
        url: string,
        config?: IRequestConfig
    ): Promise<T> {
        const response = await this.requestor.get(url, config)
        return response.data
    }

    public async delete(url: string, config?: IRequestConfig): Promise<void> {
        const response = await this.requestor.delete(url, config)
        return response.data
    }

    public async head(url: string, config?: IRequestConfig): Promise<void> {
        await this.requestor.head(url, config)
    }

    public async post<T = any>(
        url: string,
        data?: any,
        config?: IRequestConfig
    ): Promise<T> {
        const response = await this.requestor.post(url, data, config)
        return response.data
    }

    public async put<T = any>(
        url: string,
        data?: any,
        config?: IRequestConfig
    ): Promise<T> {
        const response = await this.requestor.put(url, data, config)
        return response.data
    }

    public async patch<T = any>(
        url: string,
        data?: any,
        config?: IRequestConfig
    ): Promise<T> {
        const response = await this.requestor.patch(url, data, config)
        return response.data
    }
}
