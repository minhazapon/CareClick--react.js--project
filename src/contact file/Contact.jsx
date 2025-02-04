import { LuPhone } from "react-icons/lu";
import { MdMarkEmailRead } from "react-icons/md";
import { FaLocationArrow } from "react-icons/fa";
import { FaBusinessTime } from "react-icons/fa";
import Swal from "sweetalert2";


function Contact() {

    const onSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);

        formData.append("access_key", "e87151e8-7baa-471d-b58a-0bd71fe1cd67");

        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData
        });

        const data = await response.json();

        if (data.success) {
            Swal.fire({
                title: 'Done!',
                text: 'Do you want to continue',
                icon: 'success',
                confirmButtonText: 'Cool'
            })
            event.target.reset();
        } else {
            Swal.fire({
                title: 'Error!',
                text: 'Do you want to continue',
                icon: 'error',
                confirmButtonText: 'Cool'
            })
            setResult(data.message);
        }
    };

    return (
        <div className=" mt-20 mb-20 ml-20 mr-20 ">

            <div className=" flex justify-center gap-6 ">

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

                <div className=" bg-slate-50 p-5 rounded-xl ">
                    <form onSubmit={onSubmit}>
                        <div>
                            <div>
                                <p className=" text-center font-thin text-5xl text-black ">Enquire Now</p>
                                <p className=" text-center font-thin mt-7 text-black ">  "Medicine cures diseases, but only doctors can cure patients." — Carl Jung</p>
                            </div>
                            <div className=" mt-7 ">
                                <div>
                                    <input required className=" rounded-xl h-[50px] w-full border-[1px] border-black p-5" placeholder="Full Name" name="name" type="text" />
                                </div>
                                <div>
                                    <input required className=" rounded-xl mt-3 h-[50px] w-full border-[1px] border-black p-5" placeholder="Email" type="email" name="email" id="" />
                                </div>
                                <div>
                                    <input required className=" rounded-xl mt-3  h-[50px] w-full border-[1px] border-black p-5" placeholder="Subject" name="Subject" type="text" />
                                </div>
                                <div>
                                    <textarea required className=" rounded-xl mt-3  h-[200px] w-full border-[1px] border-black p-5" placeholder="Message" name="Message" id=""></textarea>
                                </div>
                                <div>
                                    <input className=" w-full bg-black text-white p-3 btn " type="submit" value="Submit" />
                                </div>
                            </div>
                        </div>
                    </form>
                </div>

            </div>
        </div>
    )
}

export default Contact
