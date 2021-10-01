import React from 'react'
import LikedPic from './LikedPic';
import { useStateValue } from "./StateProvider";

const Like = () => {
    console.log("test:");
    const [{ LikedPics }] = useStateValue();
    return (
        <div className="Like">
            {LikedPics.map((item) => (
                <LikedPic
                    id={item.id}
                    download_url={item.download_url}
                    author={item.author}
                />
            ))}
        </div>
    )
}

export default Like
