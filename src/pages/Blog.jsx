import React from "react";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";

import { useQuery, useMutation } from "@apollo/client";
import { ALL_BLOGS } from "../lib/graphql/queries";

export default function Blog() {
  const { data, error, networkStatus, refetch } = useQuery(ALL_BLOGS, {
    notifyOnNetworkStatusChange: true,
  });
  const [blog, setBlog] = React.useState([]);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    fetchData();
  }, [networkStatus]);

  const fetchData = () => {
    switch (networkStatus) {
      case 4:
        setLoading(true);
        break;
      case 7:
        setBlog(data?.blogs);
        setLoading(false);
        break;
      case 8:
        refetch();
        // console.log(error);
        break;
    }
  };

  // console.log(blog);
  // console.log(networkStatus);

  const Render = () => {
    if (blog && blog.length > 0) {
      return blog.map((item, index) => {
        const rawDescription = item.description.substring(0, 250).replace(/,\s*$/, "").trim();
        let description;

        if (rawDescription[rawDescription.length - 1] === ".") {
          description = rawDescription.slice(0, -1)
        } else {
          description = rawDescription;
        }

        return (
          <div className="blog" key={item._id}>
            <div className="blog-container">
              <div className="image-container">
                <img src={item.image} alt="blog-image" />
              </div>

              <div className="content-container">
                <div className="author">
                  Posted by: {item.author.data.email}
                </div>

                <div className="title">{item.title}</div>
                <div className="description">{description}...</div>
              </div>
            </div>
          </div>
        );
      });
    }
  };

  return (
    <div className="blogs">
      <Navbar />
      <div className="blogs-container">
        <h1>Blog</h1>
        {loading && <div>loading...</div>}
        {!loading && <Render />}
      </div>
      <Footer />
    </div>
  );
}
