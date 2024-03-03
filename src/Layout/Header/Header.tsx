import { Link } from "react-router-dom";

import styles from "./Header.module.css"

const Header = () => {


    return (
    <>
        <header>
            <div id={styles['logo-div']}>
                <img src="/logo.svg" alt="Logo" />
                <h2>AbdullahBRashid</h2>
            </div>

            <div id="">
                <ul id="links-list">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/work">Work</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                </ul>
            </div>
        </header>
    </>
    );
}

export default Header;