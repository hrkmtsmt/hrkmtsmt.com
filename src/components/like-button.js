import React, { useState } from "react";

export const LikeButton = () => {
    const [count, setCount] = useState(0);
    const [like, setLike] = useState(false);
    const setCountLike = () => {
        if (like === false) {
            setCount(count + 1);
        } else {
            setCount(count - 1);
        }

        setLike((prevLike) => !prevLike);
    };
    const likeSatate = () => {
        if (like === false) {
            return "ci-heart_outline";
        } else {
            return "ci-heart_fill";
        }
    };
    return (
        <div>
            <button className={"c-button"} onClick={setCountLike}>
                {count}
            </button>
            <i className={likeSatate()}></i>
            <span></span>
        </div>
    );
};
