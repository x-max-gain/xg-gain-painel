import axios from "axios";

const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NzVjYjQzZWIyNTU5ZGIyYjE5NDA5MGIiLCJuYW1lIjoiTGVvZGV5bWlzb24iLCJlbWFpbCI6Imxlb2RleW1pc29uMkBnbWFpbC5jb20iLCJpYXQiOjE3MzQxMjg3MzEsImV4cCI6MTczNTQyNDczMX0.fjOIeYgXYMZ-5vFn2M88JpqKJOWqGyXYJPKxsKaVmqg";
export const API = axios.create({
    baseURL: "http://localhost:4000/api/v1",
    headers: {
        'Authorization': `Bearer ${token}`
    }
})