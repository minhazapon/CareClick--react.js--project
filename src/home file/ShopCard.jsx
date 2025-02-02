import { useEffect, useState } from "react";
import ShopDetails from "./ShopDetails";

function ShopCard() {
    const [items, setItems] = useState([]);
    const [searchQuery, setSearchQuery] = useState("");
    const [filteredItems, setFilteredItems] = useState([]);


    useEffect(() => {
        fetch("products.json")
            .then((res) => res.json())
            .then((data) => {
                setItems(data);
                setFilteredItems(data);
            });
    }, []);


    const handleSearch = (event) => {
        const query = event.target.value.toLowerCase();
        setSearchQuery(query);

        const filtered = items.filter((item) =>
            item.Name.toLowerCase().includes(query)
        );
        setFilteredItems(filtered);
    };

    return (
        <div className="mt-20 mb-20 ml-12 mr-12">
            <div className="flex justify-center">
                <input
                    className="h-[50px] w-[1240px] border-[1px] border-cyan-400 rounded mb-5 p-3"
                    type="search"
                    name="search"
                    placeholder="Search Here"
                    value={searchQuery}
                    onChange={handleSearch}
                />
            </div>
            <div className="flex justify-center">
                <div className="grid md:grid-cols-3 gap-10">
                    {filteredItems.length > 0 ? (
                        filteredItems.map((item) => (
                            <ShopDetails key={item.id} items={item} />
                        ))
                    ) : (
                        <p className="text-gray-500 text-xl col-span-3">No items found!</p>
                    )}
                </div>
            </div>
        </div>
    );
}

export default ShopCard;
