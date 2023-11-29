import { useQuery } from "@tanstack/react-query";
import UseAxiosSecure from "../../Hooks/UseAxiosSecure";
import { FaUsers } from 'react-icons/fa';
import UseAxiosPublic from "../../Hooks/UseAxiosPublic";
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid } from 'recharts';
const colors = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', 'red', 'pink'];



const Statistics = () => {
    const axiosSecure = UseAxiosSecure();
    const axiosPublic = UseAxiosPublic()

    const { data: stats = {} } = useQuery({
        queryKey: ['admin-stats'],
        queryFn: async () => {
            const res = await axiosSecure.get('/admin-stats');
            return res.data;
        }
    });
    
    const {data: parcelData = []} = useQuery({
        queryKey: ['parcel'], 
        queryFn: async() =>{
            const res = await axiosPublic.get('/AllParcel');
            return res.data;
        }
    })

    const getPath = (x, y, width, height) => {
        return `M${x},${y + height}C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3}
        ${x + width / 2}, ${y}
        C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${x + width}, ${y + height}
        Z`;
    };

    const TriangleBar = (props) => {
        const { fill, x, y, width, height } = props;

        return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
    };

    return (
        <div>
            <h3 className="text-center text-3xl font-bold underline">Admin Panel</h3>
            <div className="stats shadow my-10 w-full ">
                <div className="stat bg-lime-400 ">
                    <div className="stat-figure text-black">
                        <FaUsers className='text-3xl'></FaUsers>
                    </div>
                    <div className="text-2xl font-semibold ">Users</div>
                    <div className="stat-value ">{stats.users}</div>                   
                </div>
                <div className="stat bg-[#ffc554]">
                    <div className="stat-figure text-black">
                        <FaUsers className='text-3xl'></FaUsers>
                    </div>
                    <div className="text-2xl font-semibold ">Total Delivery Man</div>
                    <div className="stat-value ">{stats.deliveryMan}</div>                   
                </div>

                <div className="stat bg-sky-600">
                    <div className="stat-figure text-black">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"></path></svg>
                    </div>
                    <div className="text-2xl font-semibold ">Booking Parcel</div>
                    <div className="stat-value">{stats.Booking}</div>
                   
                </div>

            </div>
            <div >
            <BarChart
                        width={500}
                        height={300}
                        data={parcelData}
                        margin={{
                            top: 20,
                            right: 30,
                            left: 20,
                            bottom: 5,
                        }}
                    >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="BookingDate" />
                        
                        <YAxis />
                        <Bar dataKey="Price" fill="#8884d8" shape={<TriangleBar />} label={{ position: 'top' }}>
                            {parcelData.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={colors[index % 6]} />
                            ))}
                        </Bar>
                        
                    </BarChart>
                    <p className="ml-56">Booking Date</p>
            </div>
            
        </div>
    );
};

export default Statistics;