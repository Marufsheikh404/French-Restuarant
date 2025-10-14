import axios from "axios";
import { useNavigate } from "react-router-dom";
import useAuth from "../useAuth";

const axiosSecure = axios.create({
    baseURL: 'http://localhost:5000'
});
const useAxios = () => {
    const navigate = useNavigate(); // ✅ এখন hook এর ভিতরে
    const { logOut } = useAuth();   // ✅ এখন hook এর ভিতরে

    // request interceptors to add authorization header for every secure call to the api
    axiosSecure.interceptors.request.use((config) => {
        const token = localStorage.getItem('access-token')
        console.log('secure', token);
        config.headers.authorization = `Bearer ${token}`;
        return config;
    }, (error) => {
        return Promise.reject(error);
    });

    // intercetors 401 and 403 status
    axiosSecure.interceptors.response.use((response) => {
        return response;
    }, async (error) => {
        const status = error.response.status;
        console.log('status error in the interceptors', status);
        // it check you get 401 and 403 status you get to out in the page entry in the login page
        if (status === 401 || status === 403) {
            await logOut();
            navigate('/')
        }

    })
    return axiosSecure;
};
export default useAxios;
