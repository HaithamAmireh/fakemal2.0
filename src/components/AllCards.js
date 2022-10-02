import React, { useState, useEffect } from 'react'
import Card from './card'
// API call
function AllCards() {
    const [animes, setData] = useState([])
    let apiUrl = ""

    if (window.location.href.includes('seasonal')) {
        apiUrl = "/seasonal"
    }
    else if (window.location.href.includes('topanime')) {
        apiUrl = "/topanime"
    }
    else if (window.location.href.includes('topmanga')) {

        apiUrl = "/topmanga"
    }
    else if (window.location.href.includes('home')) {
        apiUrl = "/home"
    }

    useEffect(() => {
        fetch(apiUrl).then((res) => res.json())
            .then((json) => {
                setData([...json.data])
            })
    }, []);
    if (apiUrl === "/home") {
        return (
            // <div className="flex flex-row flex-wrap justify-around mx-1 my-8">
            <div className="grid grid-cols-2 mx-1 my-8 lg:flex flex-row flex-wrap justify-around md:grid-cols-3">
                {animes.map((anime, i) => {
                    return <Card key={i} anime_name={anime.entry[0].title} anime_poster={anime.entry[0].images.jpg.image_url} />;
                })}
            </div>
        )
    }
    else {

        return (
            // <div className="flex flex-row flex-wrap justify-around mx-1 my-8">
            <div className="grid grid-cols-2 mx-1 my-8 lg:flex flex-row flex-wrap justify-around md:grid-cols-3">
                {animes.map((anime, i) => {
                    return <Card key={i} anime_name={anime.title} anime_poster={anime.images.jpg.image_url} anime_synopsis={anime.synopsis} />;
                })}
            </div>
        )
    }
}

export default AllCards