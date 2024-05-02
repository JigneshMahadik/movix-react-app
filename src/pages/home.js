import { TopRated } from "../components/TopRated";
import { Footer } from "../components/footer";
import { HeroBanner } from "../components/heroBanner";
import { Navbar } from "../components/navbar";
import { Popular } from "../components/popular";
import { Trending } from "../components/trending";

export function Home(){
    return(
        <div>
            <Navbar/>
            <HeroBanner/>
            <Trending/>
            <Popular/>
            <TopRated/>
            <Footer/>
        </div>
    )
}