import { HeroBanner } from "../components/heroBanner";
import { Navbar } from "../components/navbar";
import { Trending } from "../components/trending";

export function Home(){
    return(
        <div>
            <Navbar/>
            <HeroBanner/>
            <Trending/>
        </div>
    )
}