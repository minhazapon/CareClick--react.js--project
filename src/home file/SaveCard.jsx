

function Save() {
    return (
        <div className="mt-20 mb-20 ml-20 mr-20">
            <div className=" flex-col md:flex-row lg:flex-row flex justify-center items-center gap-10 ">
                <div className="  w-fit md:w-[500px] pb-16 pt-16 pr-52 pl-6 bg-contain  rounded-xl"
                    style={{
                        backgroundImage: "url(https://img.freepik.com/premium-photo/hand-wash-gel-coronavirus-prevention-medical-surgical_29865-1236.jpg?w=826)",
                    }}
                >
                    <p className="  text-xl  md:text-4xl font-bold ">Save 20%<br></br>
                        <span className="  text-xs md:text-xl "> On Sanitizers</span></p>
                    <p className="  text-xs md:text-xl mt-5 text-black ">99.9% Germ Production</p>
                    <button className=" mt-5 text-black border-[1px] border-black btn bg-white ">Shop Now</button>
                </div>
                <div className=" w-fit  md:w-[500px] pb-16 pt-16 pr-52 pl-6 bg-contain  rounded-xl"
                    style={{
                        backgroundImage: "url(https://img.freepik.com/free-photo/hand-with-latex-glove-holding-spray-bottle-with-copy-space_23-2148775774.jpg?t=st=1738422404~exp=1738426004~hmac=3a10086a548ab4130dfc3d579320abcd49968c7b78df74865feb4606ae22ae7f&w=826)",
                    }}
                >
                    <p className="  text-xl  md:text-4xl font-bold ">15% Off<br></br>
                        <span className="  text-xs md:text-xl ">Protective Gears</span></p>
                    <p className="  text-xs md:text-xl mt-5 text-black ">Covid Protection</p>
                    <button className=" mt-5 text-black border-[1px] border-black btn bg-white ">Shop Now</button>
                </div>
            </div>
        </div>
    )
}

export default Save
