import { useQuery } from "@tanstack/react-query";
import UseAxiosSecure from "../../Hooks/UseAxiosSecure";
import { FaTrashAlt, FaUsers } from "react-icons/fa";
import Swal from "sweetalert2";


const AllUsers = () => {
    const axiosSecure = UseAxiosSecure();

    const { data: users = [] , refetch } = useQuery({
        queryKey: ['users'],
        queryFn: async() => {
            const res = await axiosSecure.get('/users');
            return res.data;
        }
       
            
    })
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
             axiosSecure.delete(`/users/${id}`)
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
    const handleAdmin = user => {
        axiosSecure.patch(`/users/admin/${user._id}`)
        .then(res => {
            console.log(res.data);
            if (res.data.modifiedCount > 0) {
                refetch()
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title:  `${user.name} is now admin`,
                    showConfirmButton: false,
                    timer: 1500
                  });
                
            }
        })
    }
    return (
        <div>
            <div className="flex justify-evenly">
                <h3 className="text-3xl underline">All Users</h3>
                <h3 className="text-3xl underline">total Users : {users.length}</h3>
            </div>
            <div className="overflow-x-auto my-8">
                <table className="table ">
                    {/* head */}
                    <thead className="text-black font-bold text-xl bg-[#ffc554]">
                        <tr>
                            <th>#</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Role</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                       {
                        users.map((user, index) =>  <tr key={user._id}>
                            <th>{index + 1}</th>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                            <td className="font-bold">{ user.role === 'admin' ? 'Admin' :
                                <button onClick={() => handleAdmin(user)} className="btn bg-white btn-lg"><FaUsers className="text-black"></FaUsers></button>
                                }</td>
                            <td><button onClick={() => handleDelete(user._id)} className="btn btn-ghost btn-lg"><FaTrashAlt className="text-red-600"></FaTrashAlt></button></td>
                        </tr>)
                       }

                       
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllUsers;
