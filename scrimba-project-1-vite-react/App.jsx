import { MainContent } from "./components/MainContent.jsx";
import { Navbar } from "./components/Navbar.jsx";
import "./components/Navbar.css";
import "./components/MainContent.css";

function App() {
    return (
        <div className="container">
            <Navbar />
            <MainContent />
        </div>
    )
}

export { App };