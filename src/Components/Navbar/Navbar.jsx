import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import UseAdmin from "../../Hooks/UseAdmin";



const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);
    const [isAdmin] = UseAdmin();
    const handleLogOut = () => {
        logOut();
    }
    return (

        <div>
            <div className="w-full ">
                <div className="navbar lg:p-4 h-5 dark:bg-black">
                    <div className="navbar-start">
                        <div className="dropdown">
                            <label tabIndex={0} className="btn btn-ghost lg:hidden">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                            </label>

                            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 font-bold text-black text-xl">
                                <NavLink to="/" className={({ isActive, isPending }) =>
                                    isPending ? "pending" : isActive ? "text-[#ffc554]" : ""
                                }><li><a>Home</a></li></NavLink>
                                <NavLink to="/dashboard" className={({ isActive, isPending }) =>
                                    isPending ? "pending" : isActive ? "text-[#ffc554]" : ""
                                }><li><a>DashBoard</a></li></NavLink>
                                <NavLink to="/login" className={({ isActive, isPending }) =>
                                    isPending ? "pending" : isActive ? "text-[#ffc554]" : ""
                                }><li><a>Login</a></li></NavLink>
                            </ul>
                        </div>
                        <div className="flex items-center ">
                            <img src="https://i.ibb.co/nDDYdH3/pngwing-com-1.png" className="w-[80px] mr-2" alt="" />
                            <h3 className="text-2xl font-bold md:-mx-5 mt-2 flex items-center"><span className="text-[#ffc554] text-2xl font-bold">SM</span>~<span className="text-[#53ec62]"></span>Delivery</h3>


                        </div>

                    </div>
                    <div className="navbar-center hidden lg:flex">
                        <ul className="menu menu-horizontal px-1 text-lg font-bold text-black">
                            
                            {
                                user && isAdmin && <li className="text-[#ffc554] font-bold text-xl"><Link to="/dashboard/Statistics">Dashboard</Link></li>
                            }
                            {
                                user && !isAdmin && <li className="text-[#ffc554] font-bold text-xl"><Link to="/dashboard/bookParcel">Dashboard</Link></li>
                            }
                        </ul>
                    </div>

                    <div className="navbar-end">
                        {
                            user ?
                                <div className="flex items-center text-center">
                                       <button className="btn btn-ghost btn-circle">
                                <div className="indicator">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" /></svg>
                                    <span className="badge badge-xs badge-error indicator-item"></span>
                                </div>
                            </button>
                                    <div className="dropdown dropdown-end">
                                        <div className="flex items-center gap-1">
                                            <div className="">

                                            </div>
                                            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">

                                                <div className="w-10 rounded-full">
                                                    <img src={user.photoURL} />
                                                </div>
                                            </label>
                                        </div>
                                        <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
                                            <li>
                                                <p className=" font-semibold">{user.email}</p>
                                            </li>
                                            <br />
                                            <li>

                                                <Link to={"/dashboard"}>
                                                    <p className="font-bold ">DashBoard</p>
                                                </Link>
                                                <Link onClick={handleLogOut} to={""}>
                                                    <p className="font-bold ">LogOut</p>
                                                </Link>
                                            </li>

                                        </ul>
                                    </div>
                                    <button onClick={handleLogOut}
                                        className="btn btn-active bg-[#53ec62]"

                                        type="button"
                                        data-ripple-light="true"
                                    >
                                        <span>Logout</span>
                                    </button>
                                </div>
                                :
                                <NavLink to="/login">
                                    <button
                                        className="btn bg-[#ffc554]"
                                        type="button"
                                        data-ripple-light="true"
                                    >
                                        <span>Login</span>
                                    </button>
                                </NavLink>

                        }

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;