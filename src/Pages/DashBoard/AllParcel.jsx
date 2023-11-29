import { useQuery } from "@tanstack/react-query";
import UseAxiosPublic from "../../Hooks/UseAxiosPublic";
import UseAxiosSecure from "../../Hooks/UseAxiosSecure";
import Swal from "sweetalert2";


const AllParcel = () => {
    const axiosSecure = UseAxiosSecure()
    const {data: parcel = [] , refetch} = useQuery({
        queryKey: ['parcel'], 
        queryFn: async() =>{
            const res = await axiosSecure.get('/AllParcel');
            return res.data;
        }
    })
    const handleChange = user => {
        axiosSecure.patch(`/AllParcel/admin/${user._id}`)
        .then(res => {
            console.log(res.data);
            if (res.data.modifiedCount > 0) {
                refetch()
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title:  "Parcel is now On the way",
                    showConfirmButton: false,
                    timer: 1500
                  });
                
            }
        })
    }

    return (
        <div>
        <h2 className="text-3xl font-bold text-center underline mt-5 mb-10">All Parcel List</h2>
        <div>
            <div className="overflow-x-auto w-3/4">
                <table className="table">
                    <thead className="text-black text-xl font-bold bg-[#ffc554]">
                        <tr>
                            <th>#</th>
                            <th>User Name</th>
                            <th>User Email</th>
                            <th>Booking Date</th>
                            <th>Req Delivery Date</th>
                            <th>Cost</th>
                            <th>Booking Status</th>
                            <th>Action</th>
                            
                            
                        </tr>
                    </thead>
                    <tbody>
                        {parcel.map((item, index) => <tr key={item._id}>
                            <th>{index + 1}</th>
                            <td>{item.Name}</td>
                            <td>{item.email}</td>
                            <td>{item.BookingDate}</td>
                            <td>{item.RequestedDeliveryDate}</td>
                            <td>{item.Price}TK</td>
                            <td className="font-bold">{ item.role === 'On the Way' ? 'On the Way' : <button onClick={() => handleChange(item)} className="btn btn-error">Pending</button>}</td>
                            <td><button className="btn btn-success">Manage</button></td>
                            
                            
                        </tr>)}
                    </tbody>
                </table>
            </div>
        </div>
    </div>
    );
};

export default AllParcel;