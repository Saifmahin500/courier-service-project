import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import Swal from "sweetalert2";


const BookParcel = () => {
    const { user} = useContext(AuthContext);
    const handleAddProduct = e => {
        e.preventDefault();
        const form = e.target;
        const Name = form.Name.value;
        const Email = form.Email.value;
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
        const FoodItems = {Name,Email,PhoneNumber,ParcelType,ParcelWeight,Price,ReceiverName,ReceiverPhoneNumber,ParcelDeliveryAddress,RequestedDeliveryDate,longitude,Latitude}
        console.log(FoodItems);


        fetch('http://localhost:5500/BookingParcel',{
            method:'POST',
            headers: {
                'content-type' : 'application/json'
            },
            body: JSON.stringify(FoodItems)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if(data.insertedId) {
                Swal.fire(
                    'Good job!',
                    'You successfully Booking a Parcel!',
                    'success'
                )
                
            }
        })
    }
    return (
        <div>
        <h2 className="text-3xl font-bold text-center underline mt-5">Book For Parcel</h2>
        <div className="card flex-shrink-0 w-full shadow-2xl bg-base-100 my-10">
        
            <form onSubmit={handleAddProduct}  className="card-body">
                <div className="grid grid-col-1 md:grid-cols-2 gap-6">
                <div className="form-control">
                    <label className="label">
                        <span className="label-text font-bold">Name</span>
                    </label>
                    <input type="text" name="Name" readOnly defaultValue={user?.displayName}  className="input input-bordered font-semibold " required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text font-bold">Email</span>
                    </label>
                    <input type="email" readOnly name="Email"  placeholder="email" defaultValue={user?.email} className="input input-bordered font-bold " required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text font-bold">Phone Number</span>
                    </label>
                    <input type="text" name="PhoneNumber" placeholder="Phone Number" className="input font-semibold input-bordered" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text font-bold">Parcel Type</span>
                    </label>
                    <input type="text" name="ParcelType"  placeholder="Parcel Type" className="input font-semibold input-bordered" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text font-bold">Parcel Weight</span>
                    </label>
                    <input type="number" name="ParcelWeight"  placeholder="Parcel Weight" className="input font-semibold input-bordered" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text font-bold">Price <br />(1kg par 50tk,2kg par 100tk,2kg+ par 150tk,)</span>
                    </label>
                    <input type="text" name="Price" placeholder="price" className="input input-bordered font-semibold " required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text font-bold ">Receiver’s Name</span>
                    </label>
                    <input type="text" name="ReceiverName" placeholder="Receiver’s Name" className="input input-bordered font-semibold " required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text font-bold ">Receiver's Phone Number</span>
                    </label>
                    <input type="text" name="ReceiverPhoneNumber" placeholder="Receiver's Phone Number" className="input input-bordered font-semibold " required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text font-bold ">Parcel Delivery Address</span>
                    </label>
                    <input type="text" name="ParcelDeliveryAddress" placeholder="Parcel Delivery Address" className="input input-bordered font-semibold " required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text font-bold ">Requested Delivery Date</span>
                    </label>
                    <input type="date" name="RequestedDeliveryDate" placeholder="Requested Delivery Date" className="input input-bordered font-semibold " required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text font-bold ">Delivery Address longitude</span>
                    </label>
                    <input type="text" name="longitude" placeholder="Delivery Address longitude" className="input input-bordered font-semibold " required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text font-bold ">Delivery Address Latitude</span>
                    </label>
                    <input type="text" name="Latitude" placeholder="Delivery Address Latitude" className="input input-bordered font-semibold " required />
                </div>
                
                
                </div>
                <div className="form-control mt-6">
                    <input className="btn btn-block bg-[#ffc554] font-bold" type="submit" value="Booking" />
                </div>
            </form>
        </div>
    </div>
    );
};

export default BookParcel;