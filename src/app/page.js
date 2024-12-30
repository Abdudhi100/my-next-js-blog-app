import Navigation from "../components/Navigation";
import Promo from "../components/Promo";
import NewestPosts from "../components/NewestPosts";
import Footer from "../components/Footer";

export default function Home(){
    return(
        <div style={{ fontFamily: 'Arial, san-serif', lineHeight: '1.6', color: '#333'}}>
            <Navigation/>
            <Promo/>
            <NewestPosts/>
            <Footer/>
        </div>
    )
}