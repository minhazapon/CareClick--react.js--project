
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

// import required modules
import { Navigation } from 'swiper/modules';

function ClientReview() {
    return (
        <div className=" mt-20 mb-20  p-20"
            style={{
                backgroundImage: "url(https://img.freepik.com/premium-photo/grunge-blue-texture-background_87394-5737.jpg?w=740)",
            }}
        >
            <div>
                <p className=" text-5xl font-bold text-black text-center ">Our Client Say!</p>
                <p className=" text-black text-center mt-5 "> "The physician should not treat the disease but the patient who is suffering from it." — Maimonides</p>
            </div>

            <div className=' mt-10 '>
                <>
                    <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
                        <SwiperSlide>
                            <div className="container flex flex-col w-full max-w-lg p-6 mx-auto divide-y rounded-md divide-gray-700 bg-white text-black border-[1px] border-black">
                                <div className="flex justify-between p-4">
                                    <div className="flex space-x-4">
                                        <div>
                                            <img src="https://hcmagazines.com/wp-content/uploads/2019/11/camer-un-client-1080x1080.jpg" alt="" className="object-cover w-12 h-12 rounded-full bg-gray-500" />
                                        </div>
                                        <div>
                                            <h4 className="font-bold">Leroy Jenkins</h4>
                                            <span className="text-xs text-gray-400">2 days ago</span>
                                        </div>
                                    </div>
                                    <div className="flex items-center space-x-2 text-yellow-500">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-5 h-5 fill-current">
                                            <path d="M494,198.671a40.536,40.536,0,0,0-32.174-27.592L345.917,152.242,292.185,47.828a40.7,40.7,0,0,0-72.37,0L166.083,152.242,50.176,171.079a40.7,40.7,0,0,0-22.364,68.827l82.7,83.368-17.9,116.055a40.672,40.672,0,0,0,58.548,42.538L256,428.977l104.843,52.89a40.69,40.69,0,0,0,58.548-42.538l-17.9-116.055,82.7-83.368A40.538,40.538,0,0,0,494,198.671Zm-32.53,18.7L367.4,312.2l20.364,132.01a8.671,8.671,0,0,1-12.509,9.088L256,393.136,136.744,453.3a8.671,8.671,0,0,1-12.509-9.088L144.6,312.2,50.531,217.37a8.7,8.7,0,0,1,4.778-14.706L187.15,181.238,248.269,62.471a8.694,8.694,0,0,1,15.462,0L324.85,181.238l131.841,21.426A8.7,8.7,0,0,1,461.469,217.37Z"></path>
                                        </svg>
                                        <span className="text-xl font-bold">4.5</span>
                                    </div>
                                </div>
                                <div className="p-4 space-y-2 text-sm text-gray-400">
                                    <p>Vivamus sit amet turpis leo. Praesent varius eleifend elit, eu dictum lectus consequat vitae. Etiam ut dolor id justo fringilla finibus.</p>
                                    <p>Donec eget ultricies diam, eu molestie arcu. Etiam nec lacus eu mauris cursus venenatis. Maecenas gravida urna vitae accumsan feugiat. Vestibulum commodo, ante sit urna purus rutrum sem.</p>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="container flex flex-col w-full max-w-lg p-6 mx-auto divide-y rounded-md divide-gray-700 bg-white text-black border-[1px] border-black">
                                <div className="flex justify-between p-4">
                                    <div className="flex space-x-4">
                                        <div>
                                            <img src="https://www.getcanopy.com/hubfs/Legacy/Imported_Blog_Media/ways-to-manage-clients-effectively-2.jpg" alt="" className="object-cover w-12 h-12 rounded-full bg-gray-500" />
                                        </div>
                                        <div>
                                            <h4 className="font-bold">Old Ross</h4>
                                            <span className="text-xs text-gray-400">2 days ago</span>
                                        </div>
                                    </div>
                                    <div className="flex items-center space-x-2 text-yellow-500">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-5 h-5 fill-current">
                                            <path d="M494,198.671a40.536,40.536,0,0,0-32.174-27.592L345.917,152.242,292.185,47.828a40.7,40.7,0,0,0-72.37,0L166.083,152.242,50.176,171.079a40.7,40.7,0,0,0-22.364,68.827l82.7,83.368-17.9,116.055a40.672,40.672,0,0,0,58.548,42.538L256,428.977l104.843,52.89a40.69,40.69,0,0,0,58.548-42.538l-17.9-116.055,82.7-83.368A40.538,40.538,0,0,0,494,198.671Zm-32.53,18.7L367.4,312.2l20.364,132.01a8.671,8.671,0,0,1-12.509,9.088L256,393.136,136.744,453.3a8.671,8.671,0,0,1-12.509-9.088L144.6,312.2,50.531,217.37a8.7,8.7,0,0,1,4.778-14.706L187.15,181.238,248.269,62.471a8.694,8.694,0,0,1,15.462,0L324.85,181.238l131.841,21.426A8.7,8.7,0,0,1,461.469,217.37Z"></path>
                                        </svg>
                                        <span className="text-xl font-bold">4.5</span>
                                    </div>
                                </div>
                                <div className="p-4 space-y-2 text-sm text-gray-400">
                                    <p>Vivamus sit amet turpis leo. Praesent varius eleifend elit, eu dictum lectus consequat vitae. Etiam ut dolor id justo fringilla finibus.</p>
                                    <p>Donec eget ultricies diam, eu molestie arcu. Etiam nec lacus eu mauris cursus venenatis. Maecenas gravida urna vitae accumsan feugiat. Vestibulum commodo, ante sit urna purus rutrum sem.</p>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="container flex flex-col w-full max-w-lg p-6 mx-auto divide-y rounded-md divide-gray-700 bg-white text-black border-[1px] border-black">
                                <div className="flex justify-between p-4">
                                    <div className="flex space-x-4">
                                        <div>
                                            <img src="https://cdn.prod.website-files.com/62d539593504f1e73d2c19b6/64d22bbca28f25dc5914cbd5_client%20communication.png" alt="" className="object-cover w-12 h-12 rounded-full bg-gray-500" />
                                        </div>
                                        <div>
                                            <h4 className="font-bold">BokeZ</h4>
                                            <span className="text-xs text-gray-400">2 days ago</span>
                                        </div>
                                    </div>
                                    <div className="flex items-center space-x-2 text-yellow-500">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-5 h-5 fill-current">
                                            <path d="M494,198.671a40.536,40.536,0,0,0-32.174-27.592L345.917,152.242,292.185,47.828a40.7,40.7,0,0,0-72.37,0L166.083,152.242,50.176,171.079a40.7,40.7,0,0,0-22.364,68.827l82.7,83.368-17.9,116.055a40.672,40.672,0,0,0,58.548,42.538L256,428.977l104.843,52.89a40.69,40.69,0,0,0,58.548-42.538l-17.9-116.055,82.7-83.368A40.538,40.538,0,0,0,494,198.671Zm-32.53,18.7L367.4,312.2l20.364,132.01a8.671,8.671,0,0,1-12.509,9.088L256,393.136,136.744,453.3a8.671,8.671,0,0,1-12.509-9.088L144.6,312.2,50.531,217.37a8.7,8.7,0,0,1,4.778-14.706L187.15,181.238,248.269,62.471a8.694,8.694,0,0,1,15.462,0L324.85,181.238l131.841,21.426A8.7,8.7,0,0,1,461.469,217.37Z"></path>
                                        </svg>
                                        <span className="text-xl font-bold">4.5</span>
                                    </div>
                                </div>
                                <div className="p-4 space-y-2 text-sm text-gray-400">
                                    <p>Vivamus sit amet turpis leo. Praesent varius eleifend elit, eu dictum lectus consequat vitae. Etiam ut dolor id justo fringilla finibus.</p>
                                    <p>Donec eget ultricies diam, eu molestie arcu. Etiam nec lacus eu mauris cursus venenatis. Maecenas gravida urna vitae accumsan feugiat. Vestibulum commodo, ante sit urna purus rutrum sem.</p>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="container flex flex-col w-full max-w-lg p-6 mx-auto divide-y rounded-md divide-gray-700 bg-white text-black border-[1px] border-black">
                                <div className="flex justify-between p-4">
                                    <div className="flex space-x-4">
                                        <div>
                                            <img src="https://cdn.prod.website-files.com/62d539593504f1e73d2c19b6/64d22bbca28f25dc5914cbd5_client%20communication.png" alt="" className="object-cover w-12 h-12 rounded-full bg-gray-500" />
                                        </div>
                                        <div>
                                            <h4 className="font-bold">Ordit</h4>
                                            <span className="text-xs text-gray-400">2 days ago</span>
                                        </div>
                                    </div>
                                    <div className="flex items-center space-x-2 text-yellow-500">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-5 h-5 fill-current">
                                            <path d="M494,198.671a40.536,40.536,0,0,0-32.174-27.592L345.917,152.242,292.185,47.828a40.7,40.7,0,0,0-72.37,0L166.083,152.242,50.176,171.079a40.7,40.7,0,0,0-22.364,68.827l82.7,83.368-17.9,116.055a40.672,40.672,0,0,0,58.548,42.538L256,428.977l104.843,52.89a40.69,40.69,0,0,0,58.548-42.538l-17.9-116.055,82.7-83.368A40.538,40.538,0,0,0,494,198.671Zm-32.53,18.7L367.4,312.2l20.364,132.01a8.671,8.671,0,0,1-12.509,9.088L256,393.136,136.744,453.3a8.671,8.671,0,0,1-12.509-9.088L144.6,312.2,50.531,217.37a8.7,8.7,0,0,1,4.778-14.706L187.15,181.238,248.269,62.471a8.694,8.694,0,0,1,15.462,0L324.85,181.238l131.841,21.426A8.7,8.7,0,0,1,461.469,217.37Z"></path>
                                        </svg>
                                        <span className="text-xl font-bold">4.5</span>
                                    </div>
                                </div>
                                <div className="p-4 space-y-2 text-sm text-gray-400">
                                    <p>Vivamus sit amet turpis leo. Praesent varius eleifend elit, eu dictum lectus consequat vitae. Etiam ut dolor id justo fringilla finibus.</p>
                                    <p>Donec eget ultricies diam, eu molestie arcu. Etiam nec lacus eu mauris cursus venenatis. Maecenas gravida urna vitae accumsan feugiat. Vestibulum commodo, ante sit urna purus rutrum sem.</p>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="container flex flex-col w-full max-w-lg p-6 mx-auto divide-y rounded-md divide-gray-700 bg-white text-black border-[1px] border-black">
                                <div className="flex justify-between p-4">
                                    <div className="flex space-x-4">
                                        <div>
                                            <img src="https://jobs.gartner.com/media/vczh5pqu/230621_assoc_1126-1.jpg?anchor=center&mode=crop&width=600&height=450&mode=crop&quality=75" alt="" className="object-cover w-12 h-12 rounded-full bg-gray-500" />
                                        </div>
                                        <div>
                                            <h4 className="font-bold">John</h4>
                                            <span className="text-xs text-gray-400">2 days ago</span>
                                        </div>
                                    </div>
                                    <div className="flex items-center space-x-2 text-yellow-500">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-5 h-5 fill-current">
                                            <path d="M494,198.671a40.536,40.536,0,0,0-32.174-27.592L345.917,152.242,292.185,47.828a40.7,40.7,0,0,0-72.37,0L166.083,152.242,50.176,171.079a40.7,40.7,0,0,0-22.364,68.827l82.7,83.368-17.9,116.055a40.672,40.672,0,0,0,58.548,42.538L256,428.977l104.843,52.89a40.69,40.69,0,0,0,58.548-42.538l-17.9-116.055,82.7-83.368A40.538,40.538,0,0,0,494,198.671Zm-32.53,18.7L367.4,312.2l20.364,132.01a8.671,8.671,0,0,1-12.509,9.088L256,393.136,136.744,453.3a8.671,8.671,0,0,1-12.509-9.088L144.6,312.2,50.531,217.37a8.7,8.7,0,0,1,4.778-14.706L187.15,181.238,248.269,62.471a8.694,8.694,0,0,1,15.462,0L324.85,181.238l131.841,21.426A8.7,8.7,0,0,1,461.469,217.37Z"></path>
                                        </svg>
                                        <span className="text-xl font-bold">4.5</span>
                                    </div>
                                </div>
                                <div className="p-4 space-y-2 text-sm text-gray-400">
                                    <p>Vivamus sit amet turpis leo. Praesent varius eleifend elit, eu dictum lectus consequat vitae. Etiam ut dolor id justo fringilla finibus.</p>
                                    <p>Donec eget ultricies diam, eu molestie arcu. Etiam nec lacus eu mauris cursus venenatis. Maecenas gravida urna vitae accumsan feugiat. Vestibulum commodo, ante sit urna purus rutrum sem.</p>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="container flex flex-col w-full max-w-lg p-6 mx-auto divide-y rounded-md divide-gray-700 bg-white text-black border-[1px] border-black">
                                <div className="flex justify-between p-4">
                                    <div className="flex space-x-4">
                                        <div>
                                            <img src="https://img.skininc.com/files/base/allured/all/image/2022/03/SI2204_Clients_Jenks_850x425.621fb73551f54.png?auto=format%2Ccompress&q=70&w=700" alt="" className="object-cover w-12 h-12 rounded-full bg-gray-500" />
                                        </div>
                                        <div>
                                            <h4 className="font-bold">Do WEN</h4>
                                            <span className="text-xs text-gray-400">2 days ago</span>
                                        </div>
                                    </div>
                                    <div className="flex items-center space-x-2 text-yellow-500">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-5 h-5 fill-current">
                                            <path d="M494,198.671a40.536,40.536,0,0,0-32.174-27.592L345.917,152.242,292.185,47.828a40.7,40.7,0,0,0-72.37,0L166.083,152.242,50.176,171.079a40.7,40.7,0,0,0-22.364,68.827l82.7,83.368-17.9,116.055a40.672,40.672,0,0,0,58.548,42.538L256,428.977l104.843,52.89a40.69,40.69,0,0,0,58.548-42.538l-17.9-116.055,82.7-83.368A40.538,40.538,0,0,0,494,198.671Zm-32.53,18.7L367.4,312.2l20.364,132.01a8.671,8.671,0,0,1-12.509,9.088L256,393.136,136.744,453.3a8.671,8.671,0,0,1-12.509-9.088L144.6,312.2,50.531,217.37a8.7,8.7,0,0,1,4.778-14.706L187.15,181.238,248.269,62.471a8.694,8.694,0,0,1,15.462,0L324.85,181.238l131.841,21.426A8.7,8.7,0,0,1,461.469,217.37Z"></path>
                                        </svg>
                                        <span className="text-xl font-bold">4.5</span>
                                    </div>
                                </div>
                                <div className="p-4 space-y-2 text-sm text-gray-400">
                                    <p>Vivamus sit amet turpis leo. Praesent varius eleifend elit, eu dictum lectus consequat vitae. Etiam ut dolor id justo fringilla finibus.</p>
                                    <p>Donec eget ultricies diam, eu molestie arcu. Etiam nec lacus eu mauris cursus venenatis. Maecenas gravida urna vitae accumsan feugiat. Vestibulum commodo, ante sit urna purus rutrum sem.</p>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="container flex flex-col w-full max-w-lg p-6 mx-auto divide-y rounded-md divide-gray-700 bg-white text-black border-[1px] border-black">
                                <div className="flex justify-between p-4">
                                    <div className="flex space-x-4">
                                        <div>
                                            <img src="https://www.shutterstock.com/image-photo/serious-young-man-supervisor-analyse-600nw-2063156213.jpg" alt="" className="object-cover w-12 h-12 rounded-full bg-gray-500" />
                                        </div>
                                        <div>
                                            <h4 className="font-bold">Lore WS</h4>
                                            <span className="text-xs text-gray-400">2 days ago</span>
                                        </div>
                                    </div>
                                    <div className="flex items-center space-x-2 text-yellow-500">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-5 h-5 fill-current">
                                            <path d="M494,198.671a40.536,40.536,0,0,0-32.174-27.592L345.917,152.242,292.185,47.828a40.7,40.7,0,0,0-72.37,0L166.083,152.242,50.176,171.079a40.7,40.7,0,0,0-22.364,68.827l82.7,83.368-17.9,116.055a40.672,40.672,0,0,0,58.548,42.538L256,428.977l104.843,52.89a40.69,40.69,0,0,0,58.548-42.538l-17.9-116.055,82.7-83.368A40.538,40.538,0,0,0,494,198.671Zm-32.53,18.7L367.4,312.2l20.364,132.01a8.671,8.671,0,0,1-12.509,9.088L256,393.136,136.744,453.3a8.671,8.671,0,0,1-12.509-9.088L144.6,312.2,50.531,217.37a8.7,8.7,0,0,1,4.778-14.706L187.15,181.238,248.269,62.471a8.694,8.694,0,0,1,15.462,0L324.85,181.238l131.841,21.426A8.7,8.7,0,0,1,461.469,217.37Z"></path>
                                        </svg>
                                        <span className="text-xl font-bold">4.5</span>
                                    </div>
                                </div>
                                <div className="p-4 space-y-2 text-sm text-gray-400">
                                    <p>Vivamus sit amet turpis leo. Praesent varius eleifend elit, eu dictum lectus consequat vitae. Etiam ut dolor id justo fringilla finibus.</p>
                                    <p>Donec eget ultricies diam, eu molestie arcu. Etiam nec lacus eu mauris cursus venenatis. Maecenas gravida urna vitae accumsan feugiat. Vestibulum commodo, ante sit urna purus rutrum sem.</p>
                                </div>
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </>
            </div>
        </div>
    )
}

export default ClientReview
