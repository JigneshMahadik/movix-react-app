import "./style.css"
import fb from "./assets/fb.png"
import insta from "./assets/insta.png"
import x from "./assets/x.png"
import linkedin from "./assets/linkedin.png"

export function Footer(){
    return(
        <footer>
            <div id="footer-menu">
                <p>Terms Of Use</p>
                <p>Privacy-Policy</p>
                <p>About</p>
                <p>Blog</p>
                <p>FAQ</p>
            </div>
            <div id="footer-desc">
                <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                </p>
            </div>
            <div id="footer-icons">
                <div id="fb">
                    <img src={fb} width={20}/>
                </div>
                <div id="insta">
                    <img src={insta} width={20}/>
                </div>
                <div id="x">
                    <img src={x} width={20}/>
                </div>
                <div id="linkedin">
                    <img src={linkedin} width={20}/>
                </div>
            </div>
        </footer>
    )
}