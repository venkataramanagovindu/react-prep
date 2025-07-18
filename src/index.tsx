import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, createBrowserRouter, RouterProvider } from 'react-router-dom';
import { ErrorBoundary } from "react-error-boundary";
import { LearnUseMemo } from './components/LearnUseMemo/LearnuseMemo';
import { Provider } from 'react-redux';
import { store } from './state/store';
import { Users } from './components/Users/Users';
import { CreateUser } from './components/Users/CreateUser';

const ShowPosts = React.lazy(() => import('./components/Posts/ShowPosts'));
const Counter = React.lazy(() => import('./components/redux-toolkit/counter'));

const root = ReactDOM.createRoot(document.getElementById('root')!);

// export const routes = createBrowserRouter([
//   {
//     path: '/',
//     element: <App />,
//     errorElement: <div>Something went wrong</div>,
//   },
//   {
//     path: '/posts',
//     element: (
//       <Suspense fallback={<div>Loading Posts...</div>}>
//         <ShowPosts />
//       </Suspense>
//     ),
//   },
//   {
//     path: '/learn-usememo',
//     element: <LearnUseMemo />,
//   },
//   {
//     path: '/redux-toolkit',
//     element: (
//       <Suspense fallback={<div>Loading Redux Toolkit Counter...</div>}>
//         <Counter />
//       </Suspense>
//     ),
//   },
//   {
//     path: '/users',
//     element: <Users />,
//   },
//   { 
//     path: '/create-user',
//     element: <CreateUser />,
//   },
// ]);

export const routes = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <div>Something went wrong</div>,
    children: [
      {
        index: true, // for "/"
        element: <div>Welcome to the Home Page</div>,
      },
      {
        path: 'posts',
        element: (
          <Suspense fallback={<div>Loading Posts...</div>}>
            <ShowPosts />
          </Suspense>
        ),
      },
      {
        path: 'learn-usememo',
        element: <LearnUseMemo />,
      },
      {
        path: 'redux-toolkit',
        element: (
          <Suspense fallback={<div>Loading Redux Toolkit Counter...</div>}>
            <Counter />
          </Suspense>
        ),
      },
      {
        path: 'users',
        element: <Users />,
      },
      {
        path: 'create-user',
        element: <CreateUser />,
      },
      {
        path: '*',
        element: <div>404 - Page not found</div>,
      },
    ],
  },
]);


root.render(
  // <React.StrictMode>
    <Provider store={store}>
    {/* <BrowserRouter> */}
    <ErrorBoundary fallback={<div>Something went wrong</div>}>
          {/* <BrowserRouter> */}
          <RouterProvider router={routes} />
          {/* </BrowserRouter> */}
    </ErrorBoundary>
    </Provider>

  // </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals(console.log);
