import React, { useState, useEffect } from "react";
export const LikeButton = () => {
  const [count, setCount] = useState(0);
  const [like, setLike] = useState(false);
  const toggle = () => {
    setLike(!like);
    if (like === false) {
      setCount(count + 1);
    } else {
      setCount(count - 1);
    }
  };
  useEffect(() => {
    const button = document.getElementById("like-button");
    button.addEventListener("click", () => {
      button.classList.toggle("is-like");
    });
  }, []);
  const outline = "ci-heart_outline";
  const fill = "ci-heart_fill";
  return (
    <div className={"c-like-button"}>
      <button
        onClick={toggle}
        id={"like-button"}
        className={"c-like-button-heart"}
      >
        <i id={"heart"} className={like ? fill : outline}></i>
      </button>
      <span className={"c-like-button"}>{count}</span>
    </div>
  );
};
