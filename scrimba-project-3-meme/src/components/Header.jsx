import "./Header.css";

function Header() {
    return (
        <nav className="navbar">
            <div className="nav-logo">
                <img src="/images/troll-face.png" />
                <h2>Meme Generator</h2>
            </div>
            <h4 className="nav-title">
                React Course - Project3
            </h4>
        </nav >
    )
}

export { Header }
