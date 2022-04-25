import React from "react";
import CommentsContainer from "./components/comments/CommentsContainer";
import LikesContainer from "./components/likes/LikesContainer";
import TitleContainer from "./components/title/TitleContainer";

function App() {
  return (
    <div>
      <div>
        <img alt="kekw" src="https://cdn.mos.cms.futurecdn.net/CAZ6JXi6huSuN4QGE627NR.jpg"/>
        <TitleContainer />
        <LikesContainer />
      </div>
      <CommentsContainer />
    </div>
  );
}

export default App;
