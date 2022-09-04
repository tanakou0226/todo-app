import axios, { AxiosRequestConfig, AxiosResponse, AxiosError } from "axios";
import { Todo } from "../type/Todo"

const url = "http://localhost:8000/todo";

// 全TODOリスト取得
const optiotns: AxiosRequestConfig = {
    url: `${url}/users`,
    method: "GET"
}