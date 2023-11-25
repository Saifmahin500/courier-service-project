import { Link } from "react-router-dom";


const Registration = () => {
    return (
        <div>
            <div className="hero min-h-screen my-10 rounded-lg" style={{backgroundImage: 'url(https://i.ibb.co/ft6wZPG/11878958-Online-Shoping-29.jpg)'}}>
            <div className="hero-overlay bg-opacity-80"></div>
        <div className="hero min-h-screen">
            <div className="hero-content flex-col lg:flex-row">
                <div className=" w-1/2 mr-12">

                    <img src="" alt="" />
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                {/* onSubmit={handleRegistration} */}
                    <form  className="card-body">
                        <h1 className="text-5xl  font-bold text-center">SignUp <span className="text-[#FFC554]">Now!</span> </h1>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" name="name" placeholder="UserName" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Photo url</span>
                            </label>
                            <input type="text" name="photo" placeholder="Photo url" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                        </div>
                        <div className="form-control mt-6 ">
                            <input className="btn bg-[#FFC554] font-bold" type="submit" value="Sign Up" />
                        </div>
                    </form>
                    <p className="text-center font-bold my-4">You already Login in this Website?
                        <Link to={"/login"}><span className="text-[#FFC554]"> Login</span> here</Link></p>
                </div>
            </div>
        </div>
        </div>
    </div>
    );
};

export default Registration;