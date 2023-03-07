import { Navbar } from "./components/Navbar.jsx";
import "./components/Navbar.css";

import { Hero } from "./components/Hero.jsx";
import "./components/Hero.css";

import { Card } from "./components/Card.jsx";
import "./components/Card.css";

import data from "./data.js";
import "./App.css";

function App() {
    const cards = data.map(item => {
        return (
            <Card
                key={item.id}
                {...item}
            />
        )
    });

    return (
        <>
            <Navbar />
            <Hero />
            <div className="cards">{cards}</div>
        </>
    )
}

export { App };