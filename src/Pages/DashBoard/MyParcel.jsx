
import { FaEdit, FaTrashAlt } from "react-icons/fa";

import UseParcel from "../../Hooks/UseParcel";
import Swal from "sweetalert2";
import UseAxiosPublic from "../../Hooks/UseAxiosPublic";
import { Link } from "react-router-dom";


const MyParcel = () => {
    const [parcel, refetch] = UseParcel();
    const axiosPublic = UseAxiosPublic();
    
    const handleDelete = id => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                axiosPublic.delete(`/BookingParcel/${id}`)                  
             .then(res => {
                        if (res.data.deletedCount > 0) {
                            refetch()
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                            });

                        }
                    })
    }
});
    }
return (
    <div>
        <h2 className="text-3xl font-bold text-center underline mt-5 mb-10">My Parcel List</h2>
        <div>
            <div className="overflow-x-auto">
                <table className="table  ">
                    <thead className="bg-[#ffc554] font-bold text-lg text-black">
                        <tr>
                            <th>#</th>
                            <th>Parcel Type</th>
                            <th>Req Delivery Date</th>
                            <th>Booking Date</th>
                            <th>Booking Status</th>
                            <th>Update</th>
                            <th>Cancel</th>
                        </tr>
                    </thead>
                    <tbody>
                        {parcel.map((item, index) => <tr key={item._id}>
                            <th>{index + 1}.</th>
                            <td>{item.ParcelType}</td>
                            <td>{item.RequestedDeliveryDate}</td>
                            <td>{item.BookingDate}</td>
                           
                            <td className="font-bold text-xl">{ item.role === 'On the Way' ? 'On the Way' :
                            <button className="btn btn-error font-bold ">Pending</button>}</td>
                            <td>
                              {item.role === 'On the Way' ? ' ' : <Link to={`/dashboard/update/${item._id}`}><button className="btn btn-ghost btn-lg "><FaEdit></FaEdit></button></Link> }
                                
                            </td>
                            <td>

                                <button onClick={() => handleDelete(item._id)} className="btn btn-ghost btn-lg font-bold "><FaTrashAlt className="text-red-600"></FaTrashAlt></button>
                            </td>
                        </tr>)}
                    </tbody>
                </table>
            </div>
        </div>
    </div>
);
};

export default MyParcel;