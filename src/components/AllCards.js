import React, { useState, useEffect } from "react";
import Card from "./card";
import Search from "./Search";
import { requests } from "../utils/requests";
// API call
function AllCards() {
    const [animes, setData] = useState([]);
    let apiUrl = "";

    if (window.location.href.includes("home")) {
        apiUrl = requests["home"];
    } else if (window.location.href.includes("seasonal")) {
        apiUrl = requests["seasonal"];
    } else if (window.location.href.includes("topanime")) {
        apiUrl = requests["topanime"];
    } else if (window.location.href.includes("topmanga")) {
        apiUrl = requests["topmanga"];
    } else if (window.location.href.includes("characters")) {
        apiUrl = requests["characters"];
    } else if (window.location.href.includes("search")) {
        apiUrl = requests["search"];
    } else {
        apiUrl = requests["/"]
    }

    useEffect(() => {
        fetch(apiUrl)
            .then((res) => res.json())
            .then((json) => {
                setData([...json.data]);
            });
    }, []);
    let x;
    let y;
    if (apiUrl === ("https://api.jikan.moe/v4/anime")) {
        return <Search api={apiUrl} />;
    } else {
        return (
            <div className="grid grid-cols-2 mx-1 my-8 lg:flex flex-row flex-wrap justify-around md:grid-cols-3">
                {animes.map((anime, i) => {
                    if (anime.title !== undefined) {
                        x = anime.title
                        y = anime.images.jpg.image_url
                    } else if (anime.name !== undefined) {
                        x = anime.name
                        y = anime.images.jpg.image_url
                    } else if (anime.entry[0].title !== undefined) {
                        x = anime.entry[0].title
                        y = anime.entry[0].images.jpg.image_url
                    }
                    else {
                        x = "error name"
                    }
                    return (
                        <Card
                            key={i}
                            anime_name={x}
                            anime_poster={y}
                            score={anime.score || anime.favorites}
                            anime_synopsis={anime.synopsis || anime.about || anime.content}
                        />
                    );
                })}
            </div>
        );
    }
}

export default AllCards;
