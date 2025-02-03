import Swal from "sweetalert2";


function Subscribe() {

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
                title: 'Subscribe Done!',
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
        <div className="mt-20 mb-20">
            <div className=" bg-cyan-300 p-20 ">
                <div>
                    <p className=" text-xl md:text-5xl font-bold text-center text-black ">Subscribe to Our Newsletter</p>
                    <p className=" font-thin mt-5  text-center">Sign-up to get the latest offers and news and stay updated.</p>
                </div>
                <form onSubmit={onSubmit}>
                    <div className=" flex justify-center mt-5">
                        <div className="bg-white p-6 rounded-2xl shadow-lg w-96">
                            <div className="flex flex-col space-y-4">
                                <input
                                    type="email"
                                    placeholder="Enter your email"
                                    required
                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                />
                                <input className="w-full bg-black  text-white font-semibold py-2 rounded-lg transition-all cursor-pointer" type="submit" value="Submit" />
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Subscribe
