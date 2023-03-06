function Logo() {
    return (
        <div className="nav-logo">
            <img src="../images/react-logo.svg" />
            <h3>ReactFacts</h3>
        </div>
    )
}

function Title() {
    return (
        <div className="extra-text">
            <h4>React Project - 1</h4>
        </div>
    )
}

function Navbar() {
    return (
        <nav className="navbar">
            <Logo />
            <Title />
        </nav>
    )
}

export { Navbar };