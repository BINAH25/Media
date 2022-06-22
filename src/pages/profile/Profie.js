import React from "react";
import "./profile.css";
import ProfileLeft from "../../component/profileLeft/ProfileLeft";
import Post from "../../component/post/Post";
import RightSide from "../../component/rightSide/RightSide";
import ProfileCard from "../../component/profileCard/ProfileCard";
import TopBar from "../../component/topbar/TopBar";
export default function Profie() {
  return (
    <div>
      <TopBar />
      <div className="profile">
        <ProfileLeft />
        <div className="profile-center">
          <ProfileCard />
          <Post />
        </div>
        <RightSide />
      </div>
    </div>
  );
}
