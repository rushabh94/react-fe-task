import React from "react";
import { useSelector } from "react-redux";
import PostItem from "./PostItem";

const AllPost = () => {
  const posts = useSelector((state) => state.posts?.posts);

  return (
    <div>
      {posts.map((post, index) => (
        <PostItem key={index} post={post} />
      ))}
    </div>
  );
};

export default AllPost;
