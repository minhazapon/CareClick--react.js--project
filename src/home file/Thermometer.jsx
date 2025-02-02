import { useEffect, useState } from "react";
import ThermometerDetails from "./ThermometerDetails";

function Thermometer() {
    const [thermometers, setThermometers] = useState([]);
    const [searchQuery, setSearchQuery] = useState("");
    const [filteredThermometers, setFilteredThermometers] = useState([]);

    useEffect(() => {
        fetch("thermometer.json")
            .then((res) => res.json())
            .then((data) => {
                setThermometers(data);
                setFilteredThermometers(data);
            });
    }, []);

    const handleSearch = (event) => {
        const query = event.target.value.toLowerCase();
        setSearchQuery(query);

        const filtered = thermometers.filter((item) =>
            item.name.toLowerCase().includes(query)
        );
        setFilteredThermometers(filtered);
    };

    return (
        <div>
            <div>
                <p className="text-center text-5xl font-mono">Our Special Products</p>
                <p className="text-center mt-5 text-gray-400 font-mono">
                    "The physician should not treat the disease but the patient who is suffering from it." — Maimonides
                </p>
            </div>

            <div className="flex justify-center">
                <input
                    type="search"
                    name="search"
                    placeholder="Search Here"
                    className="h-[50px] w-[300px] md:w-[1200px] border-[1px] p-2 rounded-md mt-3 border-cyan-400"
                    value={searchQuery}
                    onChange={handleSearch}
                />
            </div>

            <div className="mt-10 mb-20 ml-20 mr-20 flex justify-center">
                <div className="grid md:grid-cols-3 gap-10">
                    {filteredThermometers.length > 0 ? (
                        filteredThermometers.map((item) => (
                            <ThermometerDetails key={item.id} thermometer={item} />
                        ))
                    ) : (
                        <p className="text-gray-500 text-xl col-span-3">No items found!</p>
                    )}
                </div>
            </div>
        </div>
    );
}

export default Thermometer;
