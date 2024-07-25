import React from 'react';
import App from '../App'
import AuthorFeed from '../Components/AuthorFeed'
import Login from '../Components/Login'
import SignUpForm from '../Components/SignUp'

const routes = [
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <AuthorFeed />
      },
      {
        path: "/login",
        element: <Login />
      },
      {
        path: "/sign-up",
        element: <SignUpForm requester='author'/>
      }
    ]
  }
];

export default routes;