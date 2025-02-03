import { useEffect } from "react"
import { useState } from "react"
import NewsDetails from "./NewsDetails"

function News() {

    const [news, setNews] = useState([])

    useEffect(() => {

        fetch('news.json')
            .then(res => res.json())
            .then(data => setNews(data))

    }, [])

    return (
        <div className=" mt-20 mb-20 ml-16 mr-16 ">
            <div>
                <div>
                    <p className="text-5xl font-bold text-black text-center">Our Latest News</p>
                    <p className="mt-5 text-center">"To array a man's will against his sickness is the supreme art of medicine." — Henry Ward Beecher</p>
                </div>
                <div className=" flex justify-center mt-10 ">
                    <div className=" grid  md:grid-cols-3 gap-5 ">
                        {
                            news.map(news => <NewsDetails news={news} ></NewsDetails>)
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default News
