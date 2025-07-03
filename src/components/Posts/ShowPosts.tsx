import React, { Suspense } from "react";
import { Posts } from "./Posts";

 const ShowPosts: React.FC = () => {
  return (
    <div>
      <h2>Show Posts Component</h2>
      <Suspense fallback={<div>Loading posts...</div>}>
        <Posts />
      </Suspense>
    </div>
  );
};

export default ShowPosts;