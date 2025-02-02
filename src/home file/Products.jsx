

function Products() {
    return (
        <div className=" mt-20 mb-20 ml-20 mr-20 ">
            <div>
                <div>
                    <p className=" text-center text-5xl font-mono font-bold text-black ">Our Products</p>
                    <p className="mt-5 text-center text-gray-400"> "Medicine is a science of uncertainty and an art of probability." — William Osler</p>
                </div>
                <div className=" flex justify-center mt-10 ">
                    <div className=" grid  md:grid-cols-6 gap-24 ">

                        <div className="">
                            <div className=" flex justify-center ">
                                <img src="https://medik.wpenginepowered.com/wp-content/uploads/2020/05/Medication.png" alt="" />
                            </div>
                            <p className=" text-center mt-5 text-xl font-mono text-black ">Medication</p>
                        </div>
                        <div>
                            <div className=" flex justify-center ">
                                <img src="https://medik.wpenginepowered.com/wp-content/uploads/2020/05/Drugs.png" alt="" />
                            </div>
                            <p className=" text-center mt-5 text-xl font-mono text-black  ">Drugs</p>
                        </div>
                        <div>
                            <div className=" flex justify-center ">
                                <img src="https://medik.wpenginepowered.com/wp-content/uploads/2020/05/Laboratory.png" alt="" />
                            </div>
                            <p className=" text-center mt-5 text-xl font-mono text-black  ">Laboratory</p>
                        </div>
                        <div>
                            <div className=" flex justify-center ">
                                <img src="https://medik.wpenginepowered.com/wp-content/uploads/2020/05/Equipments.png" alt="" />
                            </div>
                            <p className=" text-center mt-5 text-xl font-mono text-black  ">Equipments</p>
                        </div>
                        <div>
                            <div className=" flex justify-center ">
                                <img src="https://medik.wpenginepowered.com/wp-content/uploads/2020/05/Radiology.png" alt="" />
                            </div>
                            <p className=" text-center mt-5 text-xl font-mono text-black  ">Radiology</p>
                        </div>
                        <div>
                            <div className=" flex justify-center ">
                                <img src="https://medik.wpenginepowered.com/wp-content/uploads/2020/05/Devices.png" alt="" />
                            </div>
                            <p className=" text-center mt-5 text-xl font-mono text-black ">Devices</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Products
