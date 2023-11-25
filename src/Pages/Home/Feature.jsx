

const Feature = () => {
    return (
        <div>
            <div className="text-center">
                <h2 className="text-4xl font-bold my-4">Why We are the <span className="text-[#FFC554]">Best</span></h2>
                <p className="text-2xl">Try Us And See How Good
                    Our Services Are.</p>
            </div>
           <div className="flex flex-col lg:flex-row gap-6 my-10">
           <div className="card w-96 h-96 ">
                <figure><img src="https://i.ibb.co/z4vttK8/free-delivery-banner-scooter-with-a-man-vector-44840011.jpg" alt="Shoes" /></figure>
                <div className="text-center">
                    <h2 className="text-2xl font-bold mb-2">Free Delivery</h2>
                    <p className="font-semibold">Lorem ipsum dolor sit amet,<br /> consectetur adipiscing elit.</p> 
                </div>
            </div>
            <div className="card w-96 ">
                <figure><img src="https://i.ibb.co/ZmYgYcY/images.png" alt="Shoes" /></figure>
                <div className="text-center mt-10">
                    <h2 className="text-2xl font-bold mb-2">Super fast Delivery</h2>
                    <p className="font-semibold">Lorem ipsum dolor sit amet,<br /> consectetur adipiscing elit.</p> 
                </div>
            </div>
            <div className="card w-96 ">
                <figure><img src="https://i.ibb.co/X81Sj7h/images-1.png" alt="Shoes" /></figure>
                <div className="text-center">
                    <h2 className="text-2xl font-bold mb-2">Safety Protocol</h2>
                    <p className="font-semibold">Lorem ipsum dolor sit amet,<br /> consectetur adipiscing elit.</p> 
                </div>
            </div>
           </div>
        </div>
    );
};

export default Feature;