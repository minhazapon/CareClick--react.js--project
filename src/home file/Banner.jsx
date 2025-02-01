
function Banner() {
    return (
        <div className="mb-20">
            <div className=" bg-cover p-24"
                style={{
                    backgroundImage: "url(https://img.freepik.com/free-vector/blue-wavy-abstract-background_1409-897.jpg?t=st=1738415801~exp=1738419401~hmac=f8757d5df11edbea6c3dc8a0819a769087cb45df8e7729ca107680c8326df412&w=826)",
                }}
            >
                <div>
                    <p className=" font-mono text-2xl ">Safety Musk</p>
                    <p className=" font-mono text-5xl font-bold mt-5 ">15% OFF. Hurry</p>
                    <p className=" text-xl mt-5 font-mono ">"Wherever the art of Medicine is loved, there is also a<br></br>
                        love of Humanity." — Hippocrates</p>
                    <button className=" btn text-black border-[1px] border-black bg-white mt-5 ">Start From $0.99</button>
                </div>
            </div>
        </div>
    )
}
export default Banner
