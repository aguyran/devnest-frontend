import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap";
import "./App.css";
import Navbar from "./components/Navbar";
import { useSelector, useDispatch } from "react-redux";
import updateUser, { User } from "./actions";
import Landing from "./components/Landing";
import { PostProps } from "./components/Post";

function App() {
  const dispatch = useDispatch();
  const [posts, setPosts] = useState<PostProps[]>([]);
  useEffect(() => {
    dispatch(updateUser());
    fetch("/data/post.json").then((res) =>
      res.json().then((data) => setPosts(data))
    );
  }, []);
  return (
    <div className="App">
      <header className="App-header">
        <Navbar />
        <Landing posts={posts} />
      </header>
    </div>
  );
}

export default App;
