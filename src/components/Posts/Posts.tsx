// src/components/Posts.tsx
import React from 'react';
import { fetchPosts } from '../Utils/fetchPosts';


const resource = fetchPosts();

export const Posts: React.FC = () => {
  const posts = resource.read(); // Suspends here until resolved

  return (

    <div>
      <h2>Posts from JSONPlaceholder:</h2>
      <ul>
        {posts.slice(0, 10).map(post => (
          <li key={post.id}>
            <strong>{post.title}</strong>
            <p>{post.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};
