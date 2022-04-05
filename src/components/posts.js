import React, { useState, useEffect } from "react";
import moment from "moment";
import Post from "./post";

function PostList({ view_active, posts }) {
  const [spinner, setSpinner] = useState(true);

  useEffect(() => {
    setTimeout(() => setSpinner(false), 100);
  }, []);

  return spinner ? (
    <div className="d-flex justify-content-center mt-4">
      <strong>Loading... </strong>
      <div className="spinner-grow" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
    </div>
  ) : (
    view_active && !spinner && (
      <div className="row">
        {posts &&
          posts.length > 0 &&
          posts.map((episode, i) => {
            return (
              <div
                className="col-xs-12 col-sm-6 col-lg-4 col-xl-3 mb-3"
                key={i}
              >
                <Post
                  autor={episode.name}
                  text={episode.summary.slice(0, 50)}
                  image={episode.image.medium}
                  createAt={moment(episode.airdate).fromNow()}
                  likes={0}
                  comments={0}
                />
              </div>
            );
          })}
      </div>
    )
  );
};

export default PostList;
