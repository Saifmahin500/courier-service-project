import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";
import UseAxiosPublic from "../../Hooks/UseAxiosPublic";


const Update = () => {
    const axiosPublic = UseAxiosPublic()
    const { Name, email, longitude, RequestedDeliveryDate, ReceiverPhoneNumber, ReceiverName,Price,ParcelWeight,ParcelDeliveryAddress,Latitude,ParcelType,PhoneNumber,_id } = useLoaderData();

    const handleUpdateProduct = async e => {
        e.preventDefault();
        const form = e.target;
        const Name = form.Name.value;
        const email = form.email.value;
        const PhoneNumber = form.PhoneNumber.value;
        const ParcelType = form.ParcelType.value;
        const ParcelWeight = form.ParcelWeight.value;
        const Price = form.Price.value;
        const ReceiverName = form.ReceiverName.value;
        const ReceiverPhoneNumber = form.ReceiverPhoneNumber.value;
        const ParcelDeliveryAddress = form.ParcelDeliveryAddress.value;      
        const RequestedDeliveryDate= form.RequestedDeliveryDate.value;      
        const longitude = form.longitude.value;      
        const Latitude = form.Latitude.value;      
        const ParcelItems = {Name,email,PhoneNumber,ParcelType,ParcelWeight,Price,ReceiverName,ReceiverPhoneNumber,ParcelDeliveryAddress,RequestedDeliveryDate,longitude,Latitude}
        console.log(ParcelItems);

        const items = await axiosPublic.patch(`/BookingParcel/${_id}`, ParcelItems)
        console.log(items.data);       
            if(items.data.modifiedCount > 0){
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "parcel is updated.",
                    showConfirmButton: false,
                    timer: 1500
                  });
            }
       
        
   


        
    }

    return (
        <div>
            <h2 className="text-3xl font-bold text-center underline mt-5">Update  Parcel Page</h2>
            <div className="card flex-shrink-0 w-full shadow-2xl bg-base-100 my-10">
                
                <form onSubmit={handleUpdateProduct} className="card-body">
                    <div className="grid grid-col-1 md:grid-cols-2 gap-6">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-bold">Name</span>
                            </label>
                            <input type="text" name="Name" defaultValue={Name} className="input input-bordered font-semibold " required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-bold">Email</span>
                            </label>
                            <input type="email" readOnly name="email" placeholder="email" defaultValue={email} className="input input-bordered font-bold " required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-bold">Phone Number</span>
                            </label>
                            <input type="text" name="PhoneNumber" defaultValue={PhoneNumber} placeholder="Phone Number" className="input font-semibold input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-bold">Parcel Type</span>
                            </label>
                            <input type="text" name="ParcelType" defaultValue={ParcelType} placeholder="Parcel Type" className="input font-semibold input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-bold">Parcel Weight</span>
                            </label>
                            <input type="number" name="ParcelWeight" defaultValue={ParcelWeight} placeholder="Parcel Weight" className="input font-semibold input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-bold">Price <br /></span>
                            </label>
                            <input type="text" name="Price" defaultValue={Price} placeholder="price" className="input input-bordered font-semibold " required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-bold ">Receiver’s Name</span>
                            </label>
                            <input type="text" name="ReceiverName" defaultValue={ReceiverName} placeholder="Receiver’s Name" className="input input-bordered font-semibold " required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-bold ">Receiver's Phone Number</span>
                            </label>
                            <input type="text" name="ReceiverPhoneNumber" placeholder="Receiver's Phone Number" defaultValue={ReceiverPhoneNumber} className="input input-bordered font-semibold " required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-bold ">Parcel Delivery Address</span>
                            </label>
                            <input type="text" name="ParcelDeliveryAddress" placeholder="Parcel Delivery Address" defaultValue={ParcelDeliveryAddress} className="input input-bordered font-semibold " required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-bold ">Requested Delivery Date</span>
                            </label>
                            <input type="date" name="RequestedDeliveryDate" placeholder="Requested Delivery Date" defaultValue={RequestedDeliveryDate} className="input input-bordered font-semibold " required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-bold ">Delivery Address longitude</span>
                            </label>
                            <input type="text" name="longitude" defaultValue={longitude} placeholder="Delivery Address longitude" className="input input-bordered font-semibold " required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-bold ">Delivery Address Latitude</span>
                            </label>
                            <input type="text" name="Latitude" defaultValue={Latitude} placeholder="Delivery Address Latitude" className="input input-bordered font-semibold " required />
                        </div>


                    </div>
                    <div className="form-control mt-6">
                        <input className="btn btn-block bg-[#ffc554] font-bold" type="submit" value="Update" />
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Update;