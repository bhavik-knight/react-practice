import React from "react";
import "./Meme.css";

function Meme() {
    const [meme, setMeme] = React.useState({
        topText: "",
        bottomText: "",
        randomImage: "https://i.imgflip.com/1bhk.jpg"
    })

    const [allMemes, setAllMemes] = React.useState(null)

    React.useEffect(() => {
        async function getMemes() {
            const res = await fetch("https://api.imgflip.com/get_memes")
            const data = await res.json()
            setAllMemes(data.data.memes)
        }
        getMemes()
    }, [])

    function getImgURI() {
        const randomNumber = parseInt(Math.random() * allMemes.length)
        const imageURI = allMemes[randomNumber]["url"]
        setMeme(prevMeme => ({
            ...prevMeme,
            randomImage: imageURI
        }))
    }

    function handleChange(event) {
        const { name, value, type } = event.target
        setMeme(prevMeme => ({
            ...prevMeme,
            [name]: value
        }))
    }

    function handleSubmit(event) {
        console.log(meme)
    }

    return (
        <main className="meme-body">
            <div className="form">
                <form className="form-input" onSubmit={handleSubmit}>
                    <input
                        type="text"
                        placeholder="top text"
                        name="topText"
                        value={meme.topText}
                        onChange={handleChange}
                    />
                    <input
                        type="text"
                        placeholder="bottom text"
                        name="bottomText"
                        value={meme.bottomText}
                        onChange={handleChange}
                    />
                </form>
                <button onClick={getImgURI} type="submit" className="button">Get a new meme image </button>
            </div>
            <div className="meme">
                <img src={meme.randomImage} className="meme-image" />
                <h3 className="meme-text top-text">{meme.topText}</h3>
                <h3 className="meme-text bottom-text">{meme.bottomText}</h3>
            </div>
        </main >
    )
}

export { Meme };
