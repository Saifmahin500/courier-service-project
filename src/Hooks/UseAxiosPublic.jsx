import axios from "axios";

const axiosPublic = axios.create({
    baseURL:"http://localhost:5500"
})

const UseAxiosPublic = () => {
    return axiosPublic;
};

export default UseAxiosPublic;