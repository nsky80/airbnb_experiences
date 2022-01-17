/*
Challenge: Build the Navbar component.
Check the Figma file for the design specifics.
*/
import airbnb_logo from "../images/airbnb-logo.png"

export default function Navbar(){
    return (
        <nav className="nav">
            <img src={airbnb_logo} alt="logo" className="nav--logo" />
        </nav>
    )
}