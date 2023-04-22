import "./Header.css";
// import Link from "./Link";

const Header = ({ logo }) => {
    return (
        <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1>Mike's Portfolio</h1>
        </header>
    );
};

export default Header;