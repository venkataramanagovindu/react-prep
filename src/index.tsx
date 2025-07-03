import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, createBrowserRouter, RouterProvider } from 'react-router-dom';
import { ErrorBoundary } from "react-error-boundary";

const ShowPosts = React.lazy(() => import('./components/Posts/ShowPosts'));

const root = ReactDOM.createRoot(document.getElementById('root')!);

const routes = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <div>Something went wrong</div>,
  },
  {
    path: '/posts',
    element: (
      <Suspense fallback={<div>Loading Posts...</div>}>
        <ShowPosts />
      </Suspense>
    ),
  }
]);

root.render(
  <React.StrictMode>
    <ErrorBoundary fallback={<div>Something went wrong</div>}>
          {/* <BrowserRouter> */}
          <RouterProvider router={routes} />
          {/* </BrowserRouter> */}
    </ErrorBoundary>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals(console.log);
