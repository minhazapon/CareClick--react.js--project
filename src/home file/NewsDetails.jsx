
import { SlCalender } from "react-icons/sl";
import { FiMessageSquare } from "react-icons/fi";
import { MdOutlineLocalOffer } from "react-icons/md";

function NewsDetails({ news }) {

    const { image, date, type, paragraph, } = news

    return (
        <div>

            <div className=" border-[1px] ">
                <div className=" flex justify-center">
                    <img className=" h-fit w-fit" src={image} alt="" />
                </div>
                <div className=" flex items-center gap-5 mt-3 p-5">
                    <div className=" flex items-center gap-1 ">
                        <p><SlCalender></SlCalender></p>
                        <p>{date}</p>
                    </div>
                    <p className=" bg-gray-400 h-[25px] w-[1px] "></p>
                    <div className=" flex items-center gap-1 ">
                        <p><FiMessageSquare></FiMessageSquare></p>
                        <p>0 Comment</p>
                    </div>
                </div>
                <div className=" mt-3 ">
                    <hr></hr>
                </div>
                <div className="p-5">
                    <div className=" flex justify-start  mt-3 ">
                        <p className=" font-sans text-xl ">{type}</p>
                    </div>
                    <div className=" flex justify-start mt-3 ">
                        <p className="font-sans">{paragraph}</p>
                    </div>
                    <div className=" mt-5 flex items-center gap-2 ">
                        <p><MdOutlineLocalOffer></MdOutlineLocalOffer></p>
                        <p>Blog, Message</p>
                    </div>
                    <div>
                        <button className=" btn bg-white border-[1px] border-black  text-black mt-5 ">Read More</button>
                    </div>
                </div>

            </div>

        </div>
    )
}

export default NewsDetails
