import "./Header.module.css"

const Header = () => {

    return (
    <>
        <header>
            <div id="logo-div">
                <img src="/logo.svg" alt="Logo" />
                <h1>AbdullahBRashid</h1>
            </div>

            <div id="">
                <ul id="links-list">
                    <li><a href="/">Home</a></li>
                    <li><a href="/work">Work</a></li>
                    <li><a href="/contact">Contact</a></li>
                </ul>
            </div>
        </header>
    </>
    );
}

export default Header;