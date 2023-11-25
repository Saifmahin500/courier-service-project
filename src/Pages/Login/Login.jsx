import { FaGoogle } from "react-icons/fa";
import { Link } from "react-router-dom";


const Login = () => {
    return (
        <div>
            <div className="hero min-h-screen my-10 rounded-lg" style={{backgroundImage: 'url(https://i.ibb.co/ft6wZPG/11878958-Online-Shoping-29.jpg)'}}>
            <div className="hero-overlay bg-opacity-80"></div>
            <div className="hero min-h-screen">
                <div className="hero-content flex-col lg:flex-row">

                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    {/* onSubmit={handleLogin} */}
                        <form  className="card-body">
                            <h1 className="text-5xl font-bold text-center"><span className="text-[#FFC554]">Login</span> now!</h1>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="Email" name="email" placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                            </div>
                            <div className="form-control mt-4">
                                <input className="btn bg-[#FFC554] font-bold" type="submit" value="Login" />
                            </div>
                            
                        </form>
                        
                      <div className="text-center">
                      {/* onClick={handleGoogle}  */}
                      <button className="btn btn-neutral font-bold"><FaGoogle></FaGoogle><input type="submit" value="Login With Google" /></button>
                        <p className="text-center font-bold my-2">New in SM~Delivery? <Link to={"/reg"}>Please <span className="text-[#FFC554]">Sign Up</span> </Link></p>
                      </div>
                    </div>
                    <div className=" w-1/2 mr-12">

                        <img src="" alt="" />
                    </div>
                </div>
            </div>
            </div>
        </div>
    );
};

export default Login;