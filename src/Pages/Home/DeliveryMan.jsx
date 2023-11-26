import { useEffect } from "react";
import { useState } from "react";
import SingleMan from "./SingleMan";


const DeliveryMan = () => {
    const [DeliveryMan, setDeliveryMan] = useState([])

    useEffect(() => {
        fetch('http://localhost:5500/TopDeliveryMan')
        .then(res => res.json())
        .then(data => setDeliveryMan(data))
    },[])

    return (
        <div>
            <h1 className="text-4xl font-bold my-4 text-center" >Our Top <span className="text-[#FFC554]">Delivery</span> Man</h1>
           <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
           {
                DeliveryMan.map(man => <SingleMan key={man.id} man={man}></SingleMan>)
            }
           </div>
        </div>
    );
};

export default DeliveryMan;