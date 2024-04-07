import heroBanner from "./assets/hero-banner.jpg"

export function HeroBanner(){
    return(
        <div id="hero-main-cont">
            <img src={heroBanner} />
            <h1>Welcome.</h1>
            <div id="banner-subtitle">
                <p>Millions of movies, TV shows and people to discover. Explore now.</p>
            </div>
            <div id="banner-input-cont">
                
            </div>
        </div>
    )
}