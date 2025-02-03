import Banner from "./home file/Banner"
import ClientReview from "./home file/ClientReview"
import MediLogo from "./home file/MediLogo"
import News from "./home file/News"
import Products from "./home file/Products"
import Safety from "./home file/Safety"
import Save from "./home file/SaveCard"
import ShopCard from "./home file/ShopCard"
import Subscribe from "./home file/Subscribe"
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
            <Subscribe></Subscribe>
            <MediLogo></MediLogo>
        </div>
    )
}

export default Home
