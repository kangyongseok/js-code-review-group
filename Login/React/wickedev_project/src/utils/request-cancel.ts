import Axios, { Canceler, CancelToken } from 'axios'

export class RequestCancel {
    public create(): CancelToken {
        return new Axios.CancelToken(this.executor)
    }

    public executor = () => {
        // TODO
        console.log('executor')
    }
}
