import React, { useEffect, useState } from "react";

const Posts = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    async function getData() {
      try {
        let res = await fetch("http://localhost:3000/products");
        let result = await res.json();
        setPosts(result);
      } catch (err) {
        console.error("Error fetching posts:", err);
      }
    }
    getData();
  }, []);

  return (
    <div className="posts-container">
      {posts.length > 0 ? (
        posts.map((post) => (
          <div className="post-card" key={post.id}>
            <div className="post-header">
              <div className="post-avatar">{post.name[0]}</div>
              <div className="post-user-info">
                <h4>{post.name}</h4>
                <p>{post.username}</p>
              </div>
            </div>
            <div className="post-body">
              <p>
                <b>Email:</b> {post.email}
              </p>
              {post.address && (
                <p>
                  <b>City:</b> {post.address.city}, <b>Street:</b>{" "}
                  {post.address.street}
                </p>
              )}
            </div>
          </div>
        ))
      ) : (
        <p>Loading posts...</p>
      )}
    </div>
  );
};

export default Posts;
