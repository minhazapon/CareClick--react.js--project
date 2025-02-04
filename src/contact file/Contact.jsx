import { LuPhone } from "react-icons/lu";
import { MdMarkEmailRead } from "react-icons/md";
import { FaLocationArrow } from "react-icons/fa";
import { FaBusinessTime } from "react-icons/fa";


function Contact() {
    return (
        <div className=" mt-20 mb-20 ml-20 mr-20 ">

            <div>

                <div>
                    <p className=" text-center font-thin text-5xl text-black ">Contact Info</p>
                    <p className=" text-center font-thin mt-7 text-black "> "To array a man's will against his sickness is the supreme art of medicine." — Henry Ward Beecher</p>
                    <div className=" flex justify-center mt-7 ">
                        <div className=" grid  md:grid-cols-2 gap-5 ">
                            <div className=" border-[1px]  p-6 rounded-xl ">
                                <p className=" flex justify-center "><LuPhone className=" h-[50px] w-[50px] "></LuPhone></p>
                                <p className=" text-center font-sans text-2xl mt-5 ">Talk to us</p>
                                <p className=" text-center mt-3">
                                    <span className=" text-xl text-gray-400 ">Toll-Free: 0803 – 080 – 3081</span>
                                    <br></br>
                                    <span className=" text-xl text-gray-400 ">0803 – 080 – 3081</span>
                                </p>
                            </div>
                            <div className=" border-[1px]  p-6 rounded-xl ">
                                <p className=" flex justify-center "><MdMarkEmailRead className=" h-[50px] w-[50px] "></MdMarkEmailRead></p>
                                <p className=" text-center font-sans text-2xl mt-5 ">Contact Us</p>
                                <p className=" text-center mt-3">
                                    <span className=" text-xl text-gray-400 ">domainname@example.com</span>
                                    <br></br>
                                    <span className=" text-xl text-gray-400 ">support@example.com</span>
                                </p>
                            </div>
                            <div className=" border-[1px]  p-6 rounded-xl ">
                                <p className=" flex justify-center "><FaLocationArrow className=" h-[50px] w-[50px] "></FaLocationArrow></p>
                                <p className=" text-center font-sans text-2xl mt-5 ">Our Location</p>
                                <p className=" text-center mt-3">
                                    <span className=" text-xl text-gray-400 ">625 @ David Blake Road,</span>
                                    <br></br>
                                    <span className=" text-xl text-gray-400 ">Adventureland, USA</span>
                                </p>
                            </div>
                            <div className=" border-[1px]  p-6 rounded-xl ">
                                <p className=" flex justify-center "><FaBusinessTime className=" h-[50px] w-[50px] "></FaBusinessTime></p>
                                <p className=" text-center font-sans text-2xl mt-5 ">Opening Hours</p>
                                <p className=" text-center mt-3">
                                    <span className=" text-xl text-gray-400 ">Mon – Sat 9 am to 8 pm</span>
                                    <br></br>
                                    <span className=" text-xl text-gray-400 ">Sun – 10 am to 3 pm</span>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* //////////////////form part/////////////////////// */}


                <div>




                </div>

            </div>

        </div>
    )
}

export default Contact
