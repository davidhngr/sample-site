import React from "react";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";

import { useQuery, useMutation } from "@apollo/client";
import { ALL_BLOGS } from "../lib/graphql/queries";

export default function Blog() {
  const { loading, error, data } = useQuery(ALL_BLOGS);
  const [blog, setBlog] = React.useState([]);

  React.useEffect(() => {
    if (!loading && data) {
      setBlog(data.blogs);
    }
  }, [data]);

  console.log(blog);

  return (
    <div className="blogs">
      <Navbar />
      <div className="blogs-container">
        {loading && <h2>loading...</h2>}
        {error && <h2>failed query: {error}</h2>}
        {!loading &&
          blog &&
          blog.map((item, index) => (
            <div className="blog" key={item._id}>
              <div className="blog-title">{item.title}</div>
              <div className="blog-description">{item.description}</div>
              <div className="blog-description">
                Author: {item.author.data.email}
              </div>
            </div>
          ))}
      </div>
      <Footer />
    </div>
  );
}
