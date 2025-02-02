import { useEffect } from "react"
import { useState } from "react"
import ShopDetails from "./ShopDetails"

function ShopCard() {

    const [items, setItems] = useState([])

    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setItems(data))
    }, [])

    return (
        <div className="  mt-20 mb-20 ml-12 mr-12 ">
            <div className=" flex justify-center ">
                <div className=" grid  md:grid-cols-3 gap-10 ">
                    {

                        items.map(items => <ShopDetails items={items}></ShopDetails>)

                    }
                </div>
            </div>
        </div>
    )
}

export default ShopCard
