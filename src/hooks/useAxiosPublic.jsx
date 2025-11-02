import axios from "axios";

const AxiosPublic = axios.create({
    baseURL:'https://bistro-server-three-xi.vercel.app'
})
const useAxiosPublic = () => {
    return AxiosPublic;
};

export default useAxiosPublic;