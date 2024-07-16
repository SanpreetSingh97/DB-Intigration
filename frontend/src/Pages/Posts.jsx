import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Posts = () => {
  const [posts, setPosts] = useState([]);

  const getPosts = async () => {
    const responce = await fetch(`http://localhost:8080/post`);
    const data = await responce.json();

    setPosts(data);
  };

  useEffect(() => {
    getPosts();
  }, []);

  const deleteProduct = async (id) => {
    await axios.delete(`http://localhost:8080/post/${id}`);
    getPosts();
  };

  return (
    <>
      <div className="container-fluid container-lg mt-5">
        <div className="   text-center">
          <div className=" mb-4">
            <Link to={"/createPost"}>Create Post</Link>
          </div>
          <div className="d-flex flex-wrap text-start align-items-sm-stretch w-100  justify-content-center row">
            {posts.map((post) => (
              // <div className="card shadow rounded-4 bg-light-subtle" style={{ width: "18rem" }}>
              //   <div className="card-body">
              //     <h5 className="card-title text-capitalize" >{post.title}</h5>
              //     <h6 className="card-subtitle mb-2 text-muted">
              //       Card subtitle
              //     </h6>
              //     <p className="card-text">
              //       {post.body}
              //     </p>
              //     <Link href="#" className="btn btn-outline-primary me-2" to={`/editPost/${post._id}`}>Edit</Link>
              //     <button href="#" className="btn btn-outline-danger ms-2" onClick={()=>deleteProduct(post._id)}>Delete</button>
              //   </div>
              // </div>
             <div className="  rounded-4 " style={{ width: "18rem" }}>
               <div className="card mb-3 ">
                <div className="card-body">
                  <h2 className="card-title text-capitalize">{post.title}</h2>
                  <p className="card-text">{post.body}</p>
                  <p className="card-text">
                    <small className="text-muted">Views: {post.views}</small>
                  </p>
                </div>
              </div>
             </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Posts;
