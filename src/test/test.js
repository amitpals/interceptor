import axios from 'axios';
import client from './apiClient';

function runTest() {
    const batchUrl = "/file-batch-api";
    const apiClient = client();
    
    // console.log ("app-client:", apiClient)
    // Should return [{id:”fileid1”},{id:”fileid2”}]
   // const req1 = apiClient.get(batchUrl, {params: {ids: ["fileid1","fileid2"]}});
    // Should return [{id:”fileid2”}]
   // const req2 = apiClient.get(batchUrl, {params: {ids: ["fileid2"]}});
    // Should reject as the fileid3 is missing from the response
    //const req3 = apiClient.get(batchUrl, {params: {ids: ["fileid3"]}});

    axios.all ([
        apiClient.get(batchUrl, {params: {ids: ["fileid1","fileid2"]}}), 
        apiClient.get(batchUrl, {params: {ids: ["fileid2"]}}), 
        apiClient.get(batchUrl, {params: {ids: ["fileid3"]}})]
        ).then (axios.spread((...responses) => {
            console.log ("----",responses[0])
    })).catch(err => {
        
    })


}

export default runTest;