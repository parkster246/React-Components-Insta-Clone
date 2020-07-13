//Complete the necessary code in this file
// import useState
import React from "react"
import { useState } from "react";
import Post from "./Post";
import "./Posts.css";
import dummyData from "../../dummy-data"
// import data 

const PostsPage = () => {
  // set up state for your data
  const [state] =useState(dummyData)
  console.log(state)
  return (
    <div className="posts-container-wrapper">
    {dummyData.map(posts => {
      return(
        <Post post={posts} />
      )
    })}
    </div>
  );
};

export default PostsPage;
