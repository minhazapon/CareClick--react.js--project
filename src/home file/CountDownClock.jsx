import { useEffect, useState } from "react";

function Clock() {

    const countClock = () => {

        const targetDate = new Date("2025-12-31T23:59:59").getTime();
        const now = new Date().getTime();
        const difference = targetDate - now;

        if (difference > 0) {
            const days = Math.floor(difference / (1000 * 60 * 60 * 24));
            const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((difference % (1000 * 60)) / 1000);
            return { days, hours, minutes, seconds };
        } else {
            return { days: 0, hours: 0, minutes: 0, seconds: 0 };
        }

    }
    const [clock, setClock] = useState(countClock())

    useEffect(() => {
        const timer = setInterval(() => {
            setClock(countClock());
        }, 1000);
        return () => clearInterval(timer)
    }, [])

    return (
        <div>
            <div className="flex space-x-4 justify-start items-center mt-5">
                <div className="text-center bg-white border-[1px] border-black text-black p-4 rounded-lg w-24">
                    <p className="text-2xl font-bold">{clock.days}</p>
                    <p>Days</p>
                </div>
                <div className="text-center bg-white border-[1px] border-black text-black p-4 rounded-lg w-24">
                    <p className="text-2xl font-bold">{clock.hours}</p>
                    <p>Hours</p>
                </div>
                <div className="text-center bg-white border-[1px] border-black text-black p-4 rounded-lg w-24">
                    <p className="text-2xl font-bold">{clock.minutes}</p>
                    <p>Minutes</p>
                </div>
                <div className="text-center bg-white border-[1px] border-black text-black p-4 rounded-lg w-24">
                    <p className="text-2xl font-bold">{clock.seconds}</p>
                    <p>Seconds</p>
                </div>
            </div>
        </div>
    )
}

export default Clock