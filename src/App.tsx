import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import AllPosts from "./components/AllPosts";
import OnePost from "./components/OnePost";
import "./App.css";
import { Carousel } from "./components/Carousel";

function App() {
  return (
    <BrowserRouter>
      <div>
        <Route component={AllPosts} path="/" exact />
        <Route component={Carousel} path="/carousel" exact />
        <Route component={OnePost} path="/post/:slug" />
      </div>
    </BrowserRouter>
  );
}

export default App;
