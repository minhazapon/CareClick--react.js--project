import Banner from "./home file/Banner"
import ClientReview from "./home file/ClientReview"
import News from "./home file/News"
import Products from "./home file/Products"
import Safety from "./home file/Safety"
import Save from "./home file/SaveCard"
import ShopCard from "./home file/ShopCard"
import Thermometer from "./home file/Thermometer"


function Home() {
    return (
        <div>
            <Banner></Banner>
            <Save></Save>
            <Products></Products>
            <ShopCard></ShopCard>
            <Safety></Safety>
            <Thermometer></Thermometer>
            <ClientReview></ClientReview>
            <News></News>
        </div>
    )
}

export default Home
