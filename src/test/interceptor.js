import axios from "axios";

const batchInterceptor = (instance) => {
    const source = axios.CancelToken.source()
   
    instance.interceptors.request.use (request => {
        //console.log ("interceptor", request.params.ids)
        //console.log (document.getElementById("requests").innerHTML)
        //document.getElementById("requests").append (request.params.ids+"")
        if (request.params.ids.find(f=>f==="fileid3")) {
            //console.log ("3");
            request.cancelToken = source.token;            
            source.cancel("file id 3 is missing");
            
        }
        return request;
    }, error => {
        Promise.reject(error)
    });


    instance.interceptors.response.use (response => {
        console.log (response.data)
        //if (response.data.items.length === 0) response.error = "No data"
        return response;
    }, error => Promise.reject(error))
}

export default batchInterceptor;