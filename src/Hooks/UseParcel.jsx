import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { useQuery } from "@tanstack/react-query";
import UseAxiosPublic from "./UseAxiosPublic";


const UseParcel = () => {
    const { user,loading } = useContext(AuthContext)
    const axiosPublic = UseAxiosPublic()
    // tanstack quary
    const { refetch, data: parcel = [] } = useQuery({
        queryKey: ['parcel' , user?.email],
        enabled: !loading,
        queryFn: async () =>{
            const res = await axiosPublic.get(`/BookingParcel?email=${user.email}`)
            return res.data;
        }

      })
      return [parcel,refetch]
};

export default UseParcel;