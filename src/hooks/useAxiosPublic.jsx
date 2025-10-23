import axios from "axios";

const AxiosPublic = axios.create({
    baseURL:'https://bistro-server-mu-nine.vercel.app'
})
const useAxiosPublic = () => {
    return AxiosPublic;
};

export default useAxiosPublic;