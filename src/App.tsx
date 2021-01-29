import { BrowserRouter, Route } from "react-router-dom";
import AllPosts from "./components/AllPosts";
import OnePost from "./components/OnePost";
import Video from "./components/Video";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <div>
        <Route component={AllPosts} path="/" exact />
        <Route component={OnePost} path="/:slug" />
        <Route component={Video} path="/video" exact / >
      </div>
    </BrowserRouter>
  );
}

export default App;
