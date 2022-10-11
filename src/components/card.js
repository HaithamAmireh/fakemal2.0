import React, { useState } from "react";
import { IoStarOutline } from "react-icons/io5";

function Card({
    anime_name,
    anime_poster,
    anime_synopsis,
    score,
}) {
    const [cardClass, setCardClass] = useState("")
    const [cardClass2, setCardClass2] = useState("")

    const flippy = () => {
        if (cardClass === "flex flex-col w-40 mx-3 my-8 items-center h-[390px] bg-gray-500 rounded-lg lg:w-64 md:w-56 bg-gray-500 cursor-pointer group perspective") {
            setCardClass("")
            setCardClass2("")
        }
        else {

            setCardClass("flex flex-col w-40 mx-3 my-8 items-center h-[390px] bg-gray-500 rounded-lg lg:w-64 md:w-56 bg-gray-500 cursor-pointer group perspective")
            setCardClass2("relative preserve-3d my-rotate-y-180 w-full h-full duration-1000")
        }
    }
    return (
        <div onClick={flippy} id="anime_card" className={cardClass || "flex flex-col w-40 mx-3 my-8 items-center h-[390px] bg-gray-500 rounded-lg lg:w-64 md:w-56 cursor-pointer group perspective"}>
            <div className={cardClass2 || "relative preserve-3d w-full h-full duration-1000"}>
                <div className="absolute backface-hidden border-4 w-full h-full rounded-lg border-gray-800 hover:border-gray-100">
                    <img src={anime_poster} alt={anime_name} className="w-full h-full rounded-sm" />
                </div>
                <div className="absolute my-rotate-y-180 backface-hidden w-full h-full bg-rose-900 rounded-lg overflow-y-scroll scrollbar-thin scrollbar-thumb-rose-600 scrollbar-track-rose-800">
                    <div className="flex flex-col text-white px-2 pb-2 text-sm overflow-x-hidden rounded-lg">
                        <h1 className="text-base">{anime_name}</h1>
                        <hr className="w-36 text-gray-900"></hr>
                        <p className="text-xs leading-5">{anime_synopsis}</p>
                    </div>
                    <div className="flex flex-end text-sm md:text-sm lg:text-base m-2">
                        <IoStarOutline className="text-yellow-300" />
                        <p>{score}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Card;
