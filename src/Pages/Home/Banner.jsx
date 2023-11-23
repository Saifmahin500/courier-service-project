

const Banner = () => {
    return (
        <div>
                <div className="hero min-h-screen ">
                    <div className="hero-content flex-col lg:flex-row-reverse">
                        <div className="w-1/2">
                        <img src="https://i.ibb.co/tPgvMSt/images-1.jpg" className=" w-[600px] rounded-lg " />
                        </div>
                        <div className="w-1/2">
                            <h1 className="text-5xl font-bold">Order Your Product <span className="text-[#ffc554]">Easier & Faster.</span></h1>
                            <p className="py-6">DeliverY is a leading global online Any items delivery marketplace, connecting consumers and Company through its platform in 24 countries.</p>
                            <input type="text" placeholder="Search here" className="input input-bordered input-warning w-full max-w-xs mr-2" />
                            <button className="btn bg-[#ffc554]">Go</button>
                        </div>
                    </div>
                </div>
            </div>
       
    );
};

export default Banner;