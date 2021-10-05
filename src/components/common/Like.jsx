import React from "react";

const Like = ({ liked, onClick }) => {
  let src;

  !liked
    ? (src =
        "https://img.icons8.com/external-those-icons-lineal-those-icons/24/000000/external-like-feedback-those-icons-lineal-those-icons.png")
    : (src =
        "https://img.icons8.com/external-those-icons-fill-those-icons/24/000000/external-like-feedback-those-icons-fill-those-icons.png");

  return (
    <img
      onClick={onClick}
      style={{ cursor: "pointer" }}
      src={src}
      alt="Like button"
    />
  );
};

export default Like;
