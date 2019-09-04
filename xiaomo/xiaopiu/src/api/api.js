import axios from "@/ulits/http.js"
// 登陆接口
export const login =(params) => axios.post("/api/login",params);
// 注册接口
export const register =(params) => axios.post("/api/register",params)
// 投票接口
export const allVote =()=> axios.get("/api/vote/allVote")
