import axios from "axios";

const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NzUxODQxYzhiZTljNzk2ZTE1OGNjN2EiLCJuYW1lIjoiTGVvZGV5bWlzb24iLCJlbWFpbCI6Imxlb2RleW1pc29uMkBnbWFpbC5jb20iLCJpYXQiOjE3MzMzOTU4MjMsImV4cCI6MTczNDY5MTgyM30.d3cD53qNuhbSTJb8Iwdv7ZlcaXNxxl5niluh34pBVSM";
export const API = axios.create({
    baseURL: "http://localhost:4000/api/v1",
    headers: {
        'Authorization': `Bearer ${token}`
    }
})