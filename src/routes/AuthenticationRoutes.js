import { lazy } from 'react';

// project imports
import Loadable from 'ui-component/Loadable';
import MinimalLayout from 'layout/MinimalLayout';

// login option 3 routing
const AuthLogin = Loadable(lazy(() => import('views/pages/authentication/authentication/Login')));
const AuthRegister = Loadable(lazy(() => import('views/pages/authentication/authentication/Register')));
const HomePage = Loadable(lazy(() => import('onepirate/Home')));
const WorkWell = Loadable(lazy(() => import('views/workWell')))

import PublicRoute from 'PublicRoute';

// ==============================|| AUTHENTICATION ROUTING ||============================== //

const AuthenticationRoutes = {
  path: '/',
  element: <MinimalLayout />,
  children: [
    {
      path: '/login',
      element: (
        <PublicRoute>
          <AuthLogin />
        </PublicRoute>
      )
    },
    {
      path: '/home',
      element: (
        <PublicRoute>
          <HomePage />
        </PublicRoute>
      )
    },
    {
      path: '/work-well',
      element: (
        <PublicRoute>
          <WorkWell />
        </PublicRoute>
      )
    },
    {
      path: '/register',
      element: (
        <PublicRoute>
          <AuthRegister />
        </PublicRoute>
      )
    },   
  ]
};

export default AuthenticationRoutes;
