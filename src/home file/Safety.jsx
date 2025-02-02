import CountdownTimer from "./CountDownClock"

function Safety() {

    return (
        <div className=" mt-20 mb-20">
            <div className=" bg-no-repeat w-full bg-cover p-14"
                style={{
                    backgroundImage: "url(https://img.freepik.com/premium-photo/there-are-many-white-yellow-flowers-painting-generative-ai_958078-33476.jpg?w=740)",
                }}
            >
                <div>
                    <p className=" text-4xl font-bold text-black ">Grade A Safety Masks<br></br>
                        for Sale. Hurry!</p>
                    <p className=" text-2xl mt-5 font-thin text-black ">Offer Ends on</p>
                    <div>
                        <CountdownTimer></CountdownTimer>
                    </div>
                    <div className="mt-5">
                        <button className=" bg-white btn border-[1px] border-black text-black font-sans ">Buy Now</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Safety
