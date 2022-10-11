import React, { useState, useEffect, useRef } from "react";
import { requests } from "../utils/requests";
import Card from "./card";

function Search() {
    const [name, setName] = useState("");
    const [api_, setApi] = useState("");
    const [animes, setData] = useState([]);
    const firstRef = useRef(null);

    const handleSubmit = event => {
        event.preventDefault();
        setApi(`${requests["search"]}?q=${firstRef.current.value}`)
    };
    useEffect(() => {
        fetch(api_)
            .then((res) => res.json())
            .then((json) => {
                setData([...json.data]);
            });
    });
    return (
        <div className="mx-2">
            <form onSubmit={handleSubmit}>
                <input
                    ref={firstRef}
                    type="text"
                    className="text-gray-700 mx-2 p-1 rounded-md my-2 border-red-500"
                />
                <button className="bg-blue-500 rounded-md p-1" type="submit" onSubmit={(e) => setName(e.target.value)}>Search</button>
            </form>
            <div className="grid grid-cols-2 mx-1 my-8 lg:flex flex-row flex-wrap justify-around md:grid-cols-3">
                {animes.map((anime, i) => {
                    return (
                        <Card
                            key={i}
                            anime_name={anime.title}
                            anime_poster={anime.images.jpg.image_url}
                            score={anime.score}
                            anime_synopsis={anime.synopsis}
                        />
                    );
                })}
            </div>
        </div>
    );
}

export default Search;
