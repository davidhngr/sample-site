import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";

import { useQuery, useMutation } from "@apollo/client";
import { ALL_BLOGS } from "../lib/graphql/queries";

export default function Blog() {
  const { loading, error, data } = useQuery(ALL_BLOGS);

  return (
    <div className="blog">
      <Navbar />
      <div className="blog-container">
        {loading && <h2>loading...</h2>}
        {error && <h2>failed query: {error}</h2>}
        {data && <h2>{JSON.stringify(data, null, 2)}</h2>}
      </div>
      <Footer />
    </div>
  );
}
