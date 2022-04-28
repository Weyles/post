import React from "react";
import CommentsContainer from "./components/comments/CommentsContainer";
import LikesContainer from "./components/likes/LikesContainer";
import styles from "./App.module.css"
// import TitleContainer from "./components/title/TitleContainer";

function App() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.content}>
          <img className={styles.image} alt="kekw" src="https://cdn.mos.cms.futurecdn.net/CAZ6JXi6huSuN4QGE627NR.jpg"/>
          {/* <TitleContainer /> */}
          <LikesContainer />
        </div>
        <CommentsContainer />
      </div>
    </div>
  );
}

export default App;
