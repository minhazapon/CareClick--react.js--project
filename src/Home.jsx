import Banner from "./home file/Banner"
import Products from "./home file/Products"
import Safety from "./home file/Safety"
import Save from "./home file/SaveCard"
import ShopCard from "./home file/ShopCard"


function Home() {
    return (
        <div>
            <Banner></Banner>
            <Save></Save>
            <Products></Products>
            <ShopCard></ShopCard>
            <Safety></Safety>
        </div>
    )
}

export default Home
