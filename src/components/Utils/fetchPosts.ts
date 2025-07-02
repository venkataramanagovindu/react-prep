// src/utils/fetchPosts.ts
export type Post = {
    id: number;
    title: string;
    body: string;
  };
  
  function wrapPromise<T>(promise: Promise<T>) {
    let status = 'pending';
    let result: T;
    let suspender = promise.then(
      r => {
        status = 'success';
        result = r;
      },
      e => {
        status = 'error';
        result = e;
      }
    );
  
    return {
      read(): T {
        if (status === 'pending') throw suspender;
        if (status === 'error') throw result;
        return result;
      },
    };
  }
  
  export function fetchPosts() {
    const promise = fetch('https://jsonplaceholder.typicode.com/posts')
      .then(res => res.json());
    return wrapPromise<Post[]>(promise);
  }
  