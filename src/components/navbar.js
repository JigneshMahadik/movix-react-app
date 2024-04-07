import { useSelector } from "react-redux"
// import { store } from "../store/store";
import "./style.css"
import { NavLink } from "react-router-dom";
import logo from "./assets//movix-logo.svg"
import search from "./assets/search-icon.png"

export function Navbar(){

    const data = useSelector((state) => state);
    console.log(data.movieSlice);
    return(
        <div id="nav-main-cont">
            <div id="left-cont">
                <img src={logo} height="48"/>
                {/* <NavLink to="/Home" id='home'><p>Home</p></NavLink> */}
            </div>
            <div id="right-cont">
                <p>Movies</p>
                <p>TV Shows</p>
                <p><img src={search} height="18" /></p>
            </div>

        </div>
    )
}