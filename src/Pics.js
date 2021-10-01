import React, { useState } from 'react'
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ThumbDownIcon from '@mui/icons-material/ThumbDown';

import { useStateValue } from "./StateProvider";



const IMG_API = "https://image.tmdb.org/t/p/w1280"

const Pics = ({ id, download_url, author }) => {

    const [{ LikedPics }, dispatch] = useStateValue();

    var [likeActive, setLikeActive] = useState(false);
    const [dislikeActive, setDislikeActive] = useState(false);
    if (Object.keys(LikedPics).length !== 0) {
        var isBtnLiked = LikedPics.find(x => x.id === id);
        if (isBtnLiked) {
            likeActive = true;
        }
    }
    const addToList = (e) => {

        // dispatch manipulate data
        // dispatch some action ino data layer
        if (!likeActive) {
            dispatch({
                type: "ADD_TO_LIST",
                item: {
                    id: id,
                    download_url: download_url,
                    author: author,
                },
            });
        }
        else {
            dispatch({
                type: "REMOVE_FROM_LIST",
                id: id,
            });
        }
        console.log("done");
    };

    const removeFromList = () => {
        // remove from basket
        setDislikeActive(!dislikeActive)
        dispatch({
            type: "REMOVE_FROM_LIST",
            id: id,
        });
    };

    return (
        <div className="Pics">
            <img src={download_url} alt={author} />
            <div className="Pics__info">
                <h3>{author}</h3>
                <span> <ThumbUpIcon id={id} onClick={addToList} className={likeActive ? "Pics__thumbsChange" : "Pics__thumb"} />
                </span>
            </div>

        </div>
    )
}

export default Pics
