import React, { useState } from "react";
import "./feedShare.css";
import Comment from "../../img/comment.png";
import Share from "../../img/send.png";
import Like from "../../img/like.png";
import Heart from "../../img/heart.png";
import { useSelector } from "react-redux";
import { likePost } from "../../api/PostRequest";

export default function FeedShare({ data }) {
  const { user } = useSelector((state) => state.AuthReducer.authData);
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  const [liked, setLiked] = useState(data.likes.includes(user._id));
  const [likes, setLikes] = useState(data.likes.length);

  const handleLike = () => {
    likePost(data._id, user._id);
    setLiked((prev) => !prev);
    liked ? setLikes((prev) => prev - 1) : setLikes((prev) => prev + 1);
  };

  return (
    <div className="feed-share">
      <span> {data.desc}</span>

      <img src={data.image ? PF + data.image : ""} alt="" />
      <div className="icons">
        <img
          src={Like}
          alt=""
          style={{ width: "35px", cursor: "pointer" }}
          onClick={handleLike}
        />
        <img src={Heart} alt="" style={{ width: "35px" }} />
        <img src={Share} alt="" style={{ width: "35px" }} />
        <img src={Comment} alt="" style={{ width: "30px" }} />
      </div>
      <span style={{ color: "var(--gray)", fontSize: "12px" }}>
        {likes} likes
      </span>

      <div className="detail">
        <span>
          <b>{data.name}</b>
        </span>
      </div>
    </div>
  );
}
