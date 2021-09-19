import React from "react";
import axios from 'axios'

export const http = axios.create({
    headers: {
        "Content-Type": "application/json",
        "X-Requested-With": "XMLHttpRequest",
        "X-Application-Name": "react",
        "Accept-Type": "application/json"
      }
});
http.interceptors.response.use(
    function(response){
        console.log(response.data)
        return response.data;
    }
)

