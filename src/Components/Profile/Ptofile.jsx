import React from "react";
import s from './Profile.module.css';
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/PtofileInfo";


const ProfileComp = () => {
    return (
        <div>
            <ProfileInfo/>
            <MyPosts/>
        </div>
    );
}

export default ProfileComp