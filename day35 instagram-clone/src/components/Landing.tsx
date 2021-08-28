import React, { useEffect } from "react";
import { FC } from "react";
import { useSelector } from "react-redux";
import { PostProps } from "./Post";
import Post from "./Post";
import { useRef } from "react";

export interface LandingProps {
  posts: PostProps[];
}

const Landing: FC<LandingProps> = ({ posts }) => {
  const user = useSelector((state: any) => state.user);
  const el = useRef<any>();
  useEffect(() => {
    if (el.current)
      el.current.scrollBy({
        top: 100,
        left: 1000,
        behavior: "smooth",
      });
  }, []);
  return (
    <div className="container landing">
      <div className="row">
        <div className="col-8">
          <div className="card story" ref={el}>
            {[...Array(15)].map((undef, i) => (
              <div key={i} className="story-img">
                <img src={user.profile} alt="" />
              </div>
            ))}
          </div>
          <div className="posts">
            {posts.map((el, index) => (
              <Post key={index} post={el} />
            ))}
          </div>
        </div>
        <div className="col-4"></div>
      </div>
    </div>
  );
};

export default Landing;
