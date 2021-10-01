import React from 'react'

import { useStateValue } from "./StateProvider";


const LikedPic = ({ id, download_url, author }) => {

    const [{ LikedPics }] = useStateValue();
    return (
        <div className="LikedPic">
            <img src={download_url} alt={author} />
            <div className="LikedPic__info">
                <h3>{author}</h3>
            </div>
        </div >
    )
}

export default LikedPic
