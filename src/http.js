import axios from 'axios'
// import Vue from 'vue'
// import router from './router'

const http = axios.create({
    baseURL: 'http://localhost:3000/json/',
    headers: {
        'Content-Type': "application/json;charset=utf-8",
        'Access-Control-Allow-Origin': '*', //指定允许进入来源的域名、ip+端口号
        // 'Access-Control-Allow-Origin': 'http://localhost:3000/',
        'Access-Control-Allow-Credentials': 'true', //设置是否可以允许发送cookie
        'Access-Control-Allow-Headers': 'Content-Type,Content-Length, Authorization, Accept,X-Requested-With',//请求的自定义请求头字段
        'Access-Control-Allow-Methods': 'PUT,POST,GET,DELETE,OPTIONS',//请求的请求方式
        'Access-Control-Max-Age': 1728000,
    },

})

export default http;