import { FaAlignCenter, FaAtlas, FaBiking, FaBook, FaHome, FaUser, FaUsers } from "react-icons/fa";
import { NavLink, Outlet } from "react-router-dom";
import UseAdmin from "../Hooks/UseAdmin";


const Dashboard = () => {
  const [isAdmin] = UseAdmin();
  return (
    <div className="drawer lg:drawer-open ">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />

      <div className="drawer-side">
        <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label>
        
        <ul className="menu p-6 w-80 min-h-full bg-[#ffc554]
           text-base-content font-bold text-xl">
            <div className="flex items-center ">
          <img src="https://i.ibb.co/nDDYdH3/pngwing-com-1.png" className="w-[80px] mr-2" alt="" />
          <h3 className="text-2xl font-bold md:-mx-5 mt-2 flex items-center "><span className="text-black text-2xl font-bold">SM</span>~<span className="text-[#53ec62]"></span>Delivery</h3>
        </div>
        <div className="divider divider-info"></div>
          {/* Sidebar content here */}

          {
            isAdmin ? <>
              <NavLink to={"/dashboard/Statistics"}><li><a><FaHome></FaHome> Statistics</a></li></NavLink>
              <NavLink to={"/dashboard/AllParcels"}><li><a><FaAlignCenter></FaAlignCenter>All Parcels</a></li></NavLink>
              <NavLink to={"/dashboard/users"}><li><a><FaUsers></FaUsers>All Users</a></li></NavLink>
              <NavLink to={"/dashboard/AllDeliveryMen"}><li><a><FaBiking></FaBiking>All Delivery Men</a></li></NavLink>
            </>
              :
              <>
                <NavLink to={"/dashboard/bookParcel"}><li><a><FaBook></FaBook>Book a Parcel</a></li></NavLink>
                <NavLink to={"/dashboard/MyParcels"}><li><a><FaAtlas></FaAtlas>My Parcels</a></li></NavLink>
                <NavLink to={"/dashboard/MyProfile"}><li><a><FaUser></FaUser>My Profile</a></li></NavLink>

              </>
          }
          <div className="divider divider-info"></div>
          <NavLink to={"/"}><li><a><FaHome></FaHome>Home</a></li></NavLink>
        </ul>
      </div>
      <div className="drawer-content flex flex-col  p-8">
        {/* Page content here */}
        <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>
        <Outlet></Outlet>

      </div>
    </div>
  );
};

export default Dashboard;