import React from "react";
import Profile from "../../component/profile/Profile";
import "./home.css";
import Post from "../../component/post/Post";
import RightSide from "../../component/rightSide/RightSide";
import TopBar from "../../component/topbar/TopBar";

export default function Home() {
  return (
    <div>
      <TopBar />
      <div className="home">
        <RightSide />
        <Post />
        <Profile />
      </div>
    </div>
  );
}
