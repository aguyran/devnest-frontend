import React, { useState } from "react";
import { FC } from "react";
export interface PostProps {
  username: string;
  post: string;
}
interface PostPropsTemp {
  post: PostProps;
}
const Post: FC<PostPropsTemp> = ({ post }) => {
  const [isLiked, setLiked] = useState<boolean>(false);
  return (
    <div className="card post">
      <div className="class-header">
        {" "}
        <h5 className="card-title">{post.username}</h5>
        <i className="bi bi-three-dots"></i>
      </div>

      <img src={post.post} className="card-img-top" alt="..." />
      <div className="buttons">
        <i
          className={isLiked ? "bi bi-heart-fill" : "bi bi-heart"}
          onClick={() => setLiked(!isLiked)}
        ></i>
        <i className="bi bi-chat"></i>
        <i className="bi bi-share-fill"></i>
      </div>
    </div>
  );
};

export default Post;
