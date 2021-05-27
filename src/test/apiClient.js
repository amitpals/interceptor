import axios from 'axios';
import batchInterceptor  from "./interceptor";

const client = () => {
    const config = {
        host: "https://europe-west1-quickstart-1573558070219.cloudfunctions.net/",
        baseURL: "https://europe-west1-quickstart-1573558070219.cloudfunctions.net/",
        url: "https://europe-west1-quickstart-1573558070219.cloudfunctions.net/file-batch-api",
        headers: {}
    }   

    const instance = axios.create (config);
    //const cancelToken = instance.CancelToken (cancel => console.log (cancel))
    //console.log (cancelToken)
    batchInterceptor(instance);
    return instance;
}

export default client;
