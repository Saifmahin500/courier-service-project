import { useQuery } from "@tanstack/react-query";
import { FaTrashAlt } from "react-icons/fa";
import UseAxiosSecure from "../../Hooks/UseAxiosSecure";




const AllDeliveryMan = () => {
   
    const axiosSecure = UseAxiosSecure();
    const { data: DeliveryMan = [] } = useQuery({
        queryKey: ['DeliveryMan'],
        queryFn:  async() => {
            const res = await axiosSecure.get('/TopDeliveryMan');
            return res.data;
        }

    })
    return (
        <div>
            <h1 className="text-3xl text-center underline font-bold mb-6">Our All Delivery Man</h1>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead className="bg-[#ffc554] font-bold text-lg text-black">
                        <tr>
                            <th>
                                number
                            </th>
                            <th> Image</th>
                            <th> Name</th>
                            <th>Parcels Delivered</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            DeliveryMan.map((Man, index) => <tr key={Man._id}>
                                <th>
                                    {index + 1}
                                </th>
                                <td>
                                    <div className="flex items-center gap-3">
                                        <div className="avatar">
                                            <div className="mask mask-circle w-24 h-24">
                                                <img src={Man.Image} alt="Avatar Tailwind CSS Component" />
                                            </div>
                                        </div>

                                    </div>
                                </td>
                                <td className="font-bold">
                                    {Man.Name}
                                </td>
                                <td className="text-center">{Man.Parcels_Delivered
                                }</td>
                                <th>
                                    <button onClick={() => handleDelete(item._id)} className="btn btn-ghost btn-lg"><FaTrashAlt className="text-red-600"></FaTrashAlt></button>
                                </th>
                            </tr>)
                        }

                    </tbody>


                </table>
            </div>
        </div>
    );
};

export default AllDeliveryMan;