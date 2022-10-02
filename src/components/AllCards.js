import React, { useState, useEffect } from 'react'
import Card from './card'
// API call
function AllCards() {
    const [animes, setData] = useState([])
    let apiUrl = ""
    console.log(window.location.href.includes('seasonal'))
    if (window.location.href.includes('seasonal')) {
        apiUrl = "/seasonal"
    }
    else {

    }
    useEffect(() => {
        fetch(apiUrl).then((res) => res.json())
        .then((json) => {
            setData(json.data)
        })
    }, []);
    return (
        // <div className="flex flex-row flex-wrap justify-around mx-1 my-8">
        <div className="grid grid-cols-2 mx-1 my-8 lg:flex flex-row flex-wrap justify-around md:grid-cols-3">
            {animes.map((anime, i) => {
                return <Card key={i} anime_name={anime.title} anime_poster={anime.images.jpg.image_url} />;
            })}
        </div>
    )
}

export default AllCards