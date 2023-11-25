import { FaFacebook, FaInstagram,  FaTwitter,  } from "react-icons/fa";

const SingleMan = ({man}) => {
    const { Name,Image,Parcels_Delivered} = man;
    return (
        <div >
            <div className="relative flex w-96 flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
                <div className="relative  mt-4 h-80 overflow-hidden  bg-clip-border text-gray-700  flex justify-center">
                    <img className="" src={Image} alt="profile-picture" />
                </div>
                <div className="p-6 text-center">
                    <h4 className="mb-2 block font-sans text-2xl font-bold leading-snug tracking-normal text-blue-gray-900 antialiased">
                        {Name}
                    </h4>
                    <p className="block bg-gradient-to-tr from-pink-600 to-pink-400 bg-clip-text font-sans text-base font-medium leading-relaxed text-[#ffc554] antialiased">
                    Parcels Delivered : {Parcels_Delivered}
                    </p>
                </div>
                <hr />
                <div className="flex justify-center gap-7 p-6 pt-2">
                    <a
                        href="#facebook"
                        className="block bg-gradient-to-tr from-blue-600 to-blue-400 bg-clip-text font-sans text-2xl font-normal leading-relaxed text-black antialiased"
                    >
                        <i className="fab fa-facebook" aria-hidden="true"><FaFacebook></FaFacebook></i>
                    </a>
                    <a
                        href="#twitter"
                        className="block bg-gradient-to-tr from-light-blue-600 to-light-blue-400 bg-clip-text font-sans text-2xl font-normal leading-relaxed text-black antialiased"
                    >
                        <i className="fab fa-twitter" aria-hidden="true"><FaTwitter></FaTwitter></i>
                    </a>
                    <a
                        href="#instagram"
                        className="block bg-gradient-to-tr from-purple-600 to-purple-400 bg-clip-text font-sans text-2xl font-normal leading-relaxed text-black antialiased"
                    >
                        <i className="fab fa-instagram" aria-hidden="true"><FaInstagram></FaInstagram></i>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default SingleMan;