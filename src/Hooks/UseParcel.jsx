import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { useQuery } from "@tanstack/react-query";


const UseParcel = () => {
    const { user } = useContext(AuthContext)
    // tanstack quary
    const { refetch, data: parcel = [] } = useQuery({
        queryKey: ['parcel' , user?.email],
        queryFn: () =>
          fetch(`http://localhost:5500/BookingParcel?email=${user.email}`)
          .then((res) => res.json(),
          ),
      })
      return [parcel,refetch]
};

export default UseParcel;