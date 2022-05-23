import { useQuery, useMutation } from "@apollo/client";
import { ALL_BLOGS } from "../lib/graphql/queries";

export default function Blog() {
  const { loading, error, data } = useQuery(ALL_BLOGS);
  
  console.log(data)

  if (loading) {
    return (
      <div>
        <h2>loading...</h2>
      </div>
    );
  }
  if (error) {
    return (
      <div>
        <h2>failed query: {error}</h2>
      </div>
    );
  }

  return (
    <div>
      <h2>{JSON.stringify(data)}</h2>
    </div>
  );
}
