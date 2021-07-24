import React, { useState, useEffect } from "react";

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
    useEffect(() => {
        const button = document.getElementById("like-button-heart");
        button.addEventListener("click", () => {
            button.classList.toggle("is-like");
        });
    }, []);
    return (
        <div className={"c-like-button"}>
            <button
                id={"like-button-heart"}
                className={"c-like-button-heart"}
                onClick={setCountLike}
            >
                <i className={likeSatate()}></i>
            </button>
            <span className={"c-like-button"}>{count}</span>
        </div>
    );
};
