import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";


const Myprofile = () => {
    const {user} = useContext(AuthContext)
    return (
        <div>       
            <div className="relative  flex  w-96 flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md mx-auto my-12">
                <div className="relative  mt-4 h-80 overflow-hidden  bg-clip-border text-gray-700  flex justify-center">
                    <img className="" src={user.photoURL} alt="profile-picture" />
                </div>
                <div className="p-6 text-center">
                    <h4 className="mb-2 block font-sans text-2xl font-bold leading-snug tracking-normal text-blue-gray-900 antialiased">
                       Name : {user.displayName}
                    </h4>
                    <p className="block bg-gradient-to-tr from-pink-600 to-pink-400 bg-clip-text font-sans text-xl font-medium leading-relaxed text-black  antialiased">
                        Email : {user.email}
                    </p>
                    
                </div>
                <div className="flex justify-center gap-7 mb-2">
                    <a
                        href="#facebook"
                        className="block bg-gradient-to-tr from-blue-600 to-blue-400 bg-clip-text font-sans text-2xl font-normal leading-relaxed text-black antialiased"
                    >
                        <i className="fab fa-facebook" aria-hidden="true"><FaFacebook className="text-blue-700"></FaFacebook></i>
                    </a>
                    <a
                        href="#twitter"
                        className="block bg-gradient-to-tr from-light-blue-600 to-light-blue-400 bg-clip-text font-sans text-2xl font-normal leading-relaxed text-black antialiased"
                    >
                        <i className="fab fa-twitter" aria-hidden="true"><FaTwitter className="text-blue-500"></FaTwitter></i>
                    </a>
                    <a
                        href="#instagram"
                        className="block bg-gradient-to-tr from-purple-600 to-purple-400 bg-clip-text font-sans text-2xl font-normal leading-relaxed text-black antialiased"
                    >
                        <i className="fab fa-instagram" aria-hidden="true"><FaInstagram className="text-pink-700"></FaInstagram></i>
                    </a>
                </div>
                <hr />
                <div className="my-4 mx-auto">
                <button className='bg-[#FFC554] px-10 py-1 rounded-lg text-black cursor-pointer hover:bg-[#ea0a2f] font-bold  block mb-1'>
                  Update Profile
                </button>
                <button className='bg-[#FFC554] px-7 py-1 rounded-lg text-black font-bold cursor-pointer hover:bg-[#ea0a2f]'>
                  Change Password
                </button>
              </div>
            </div>

        </div>
    );
};

export default Myprofile;