

function ShopDetails({ items }) {

    const { image, Title, Name, price } = items

    return (
        <div>
            <div className="card bg-base-100 w-96 h-[600px] 
            shadow-xl
             hover:border-[1px] border-cyan-400
            ">
                <figure className="">
                    <img
                        src={image}
                        alt="Shoes"
                        className=" h-[400px] w-full" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className=" font-thin text-xs text-gray-400 ">{Title}</h2>
                    <p className=" font-sans text-xl text-black "> {Name} </p>
                    <div>
                        <div className="rating rating-sm">
                            <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" />
                            <input
                                type="radio"
                                name="rating-6"
                                className="mask mask-star-2 bg-orange-400"
                                defaultChecked />
                            <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" />
                        </div>
                    </div>
                    <p className=" text-xl font-sans "> {price} </p>
                    <div className="card-actions">
                        <button className="btn bg-cyan-800 text-white font-mono ">Add Cart</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ShopDetails

