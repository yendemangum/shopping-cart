
import navbar from "../styles/navbar.module.css"
import { Link } from "react-router-dom"

// eslint-disable-next-line react/prop-types
function Navbar({items}) {

    return (
        <span className={navbar.navbar}><Link to="/" relative="path"><button className={navbar.button}>Home</button></Link><Link to="/shop" relative="path"><button className={navbar.button}>Shop</button></Link><span>Items in cart: {items}</span></span>
    )
}

export default Navbar