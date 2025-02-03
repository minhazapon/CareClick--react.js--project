import { IoHomeOutline } from "react-icons/io5";
import { FiPhone } from "react-icons/fi";
import { TfiEmail } from "react-icons/tfi";
import { TbBrandLinkedin } from "react-icons/tb";
import { RiFacebookBoxLine } from "react-icons/ri";
import { FaGooglePlusG } from "react-icons/fa";
import { CiTwitter } from "react-icons/ci";
import { SlSocialInstagram } from "react-icons/sl";

function Footer() {
    return (
        <div className="">
            <div>
                <hr></hr>
            </div>
            <div className=" p-20 flex-col md:flex-row lg:flex-row  flex gap-24 ">
                <div>
                    <div>
                        <div>
                            <div className=" flex items-center gap-2">
                                <img className=" h-[50px] " src="https://cdn-icons-png.flaticon.com/128/12757/12757178.png" alt="" />
                                <a className="text-2xl">CareClick</a>
                            </div>
                        </div>
                        <div className=" flex items-center gap-2 mt-5">
                            <p><IoHomeOutline className=" h-[25px] w-[25px] "></IoHomeOutline></p>
                            <p>No: 58 A, East Madison Street,<br></br> Baltimore, MD, USA 4508</p>
                        </div>
                        <div className=" flex items-center gap-2 mt-5">
                            <p><FiPhone className=" h-[25px] w-[25px] "></FiPhone></p>
                            <p>Baltimore, MD, USA 4508M<br></br>+91 12345678</p>
                        </div>
                        <div className=" flex items-center gap-2 mt-5">
                            <p><TfiEmail className=" h-[25px] w-[25px] "></TfiEmail></p>
                            <p>support@somemail.com</p>
                        </div>
                    </div>
                    <div className=" flex items-center gap-2 mt-5">
                        <div>
                            <p className=" border-[1px] border-black p-1 "><TbBrandLinkedin className=" h-[30px] w-[30px] "></TbBrandLinkedin></p>
                        </div>
                        <div>
                            <p className=" border-[1px] border-black p-1 "><RiFacebookBoxLine className=" h-[30px] w-[30px] "></RiFacebookBoxLine></p>
                        </div>
                        <div>
                            <p className=" border-[1px] border-black p-1 "><FaGooglePlusG className=" h-[30px] w-[30px] "></FaGooglePlusG></p>
                        </div>
                        <div>
                            <p className=" border-[1px] border-black p-1 "><CiTwitter className=" h-[30px] w-[30px] "></CiTwitter></p>
                        </div>
                        <div>
                            <p className=" border-[1px] border-black p-1 "><SlSocialInstagram className=" h-[30px] w-[30px] "></SlSocialInstagram></p>
                        </div>
                    </div>
                </div>

                <div>
                    <div className=" flex-col md:flex-row lg:flex-row flex items-center gap-44 ">
                        <div>
                            <p className=" text-2xl font-thin ">Help</p>
                            <div className=" mt-5 ">
                                <p className=" cursor-pointer text-xl font-thin mt-2 "> Scissors</p>
                                <p className=" cursor-pointer text-xl font-thin mt-2 "> Glucometer</p>
                                <p className=" cursor-pointer text-xl font-thin mt-2 "> Disposable Gloves</p>
                                <p className=" cursor-pointer text-xl font-thin mt-2 "> Cleaning Scissor</p>
                                <p className=" cursor-pointer text-xl font-thin mt-2 "> Smart Mask</p>
                            </div>
                        </div>
                        <div>
                            <p className=" text-2xl font-thin ">Support</p>
                            <div className=" mt-5 ">
                                <p className=" cursor-pointer text-xl font-thin mt-2 ">   Plaster machine</p>
                                <p className=" cursor-pointer text-xl font-thin mt-2 ">     Pedometer</p>
                                <p className=" cursor-pointer text-xl font-thin mt-2 ">   Cleaning Scissor</p>
                                <p className=" cursor-pointer text-xl font-thin mt-2 ">  Smart Mask</p>
                                <p className=" cursor-pointer text-xl font-thin mt-2 ">     Pedometer</p>
                            </div>
                        </div>
                        <div>
                            <p className=" text-2xl font-thin ">Information</p>
                            <div className=" mt-5 ">
                                <p className=" cursor-pointer text-xl font-thin mt-2 "> Scissors</p>
                                <p className=" cursor-pointer text-xl font-thin mt-2 "> Glucometer</p>
                                <p className=" cursor-pointer text-xl font-thin mt-2 "> Disposable Gloves</p>
                                <p className=" cursor-pointer text-xl font-thin mt-2 "> Cleaning Scissor</p>
                                <p className=" cursor-pointer text-xl font-thin mt-2 "> Smart Mask</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <hr></hr>
            <div>
                <p className=" text-center p-5 ">Copyright Powered by Designthemes</p>
            </div>
        </div>
    )
}

export default Footer
