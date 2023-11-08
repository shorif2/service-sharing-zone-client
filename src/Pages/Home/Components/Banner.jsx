

const Banner = () => {
    return (
        <div>
            <div className="hero min-h-screen" style={{ backgroundImage: 'url(https://daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.jpg)' }}>

                <div className="hero-content flex flex-col items-start bg-white p-14 rounded-lg">

                    <div className="flex flex-col w-full items-start">
                        <h2 className="text-[44px] font-medium">
                            Find The perfect
                        </h2>
                        <h2 className="text-[44px] font-medium">
                        Provider for you need
                        </h2>
                        <h3 className="text-2xl font-medium text-gray-400 mb-6">
                            Get free quotes within minutes
                        </h3>
                    </div>

                    <div>
                        <div className="join  border">
                            <input type="text" className="w-[300px] py-3 font-medium" placeholder="What service are you looking for?" />
                            <input type="text" className="py-3 font-medium" placeholder="Postcode" />
                        </div>
                        <button className="bg-red-500 text-white font-medium py-[14px] px-8 ml-2">Search</button>
                    </div>
                    <p className="font-medium">Popular: House Cleaning, Web Design, Personal Trainers</p>

                </div>
            </div>
        </div>
    );
};

export default Banner;