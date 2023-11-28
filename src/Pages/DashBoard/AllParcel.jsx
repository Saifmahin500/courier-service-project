import { useQuery } from "@tanstack/react-query";
import UseAxiosPublic from "../../Hooks/UseAxiosPublic";


const AllParcel = () => {
    const axiosPublic = UseAxiosPublic()
    const {data: parcel = []} = useQuery({
        queryKey: ['parcel'], 
        queryFn: async() =>{
            const res = await axiosPublic.get('/AllParcel');
            return res.data;
        }
    })
    return (
        <div>
        <h2 className="text-3xl font-bold text-center underline mt-5 mb-10">My Parcel List</h2>
        <div>
            <div className="overflow-x-auto">
                <table className="table bg-[#ffc554] ">
                    <thead className="text-black font-bold">
                        <tr>
                            <th>#</th>
                            <th>User Name</th>
                            <th>User Email</th>
                            <th>Booking Date</th>
                            <th>Requested Delivery Date</th>
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
                            <td></td>
                            <td>{item.RequestedDeliveryDate}</td>
                            <td>{item.Price}TK</td>
                            <td><button className="btn btn-success">Pending</button></td>
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