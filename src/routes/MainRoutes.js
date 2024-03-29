import { lazy } from 'react';

// project imports
import MainLayout from 'layout/MainLayout';
import Loadable from 'ui-component/Loadable';

// dashboard routing
const DashboardDefault = Loadable(lazy(() => import('views/dashboard/Default')));
const UserJobList = Loadable(lazy(() => import('views/jobList/Default')))
const ListNewJob = Loadable(lazy(() => import('views/listNewJob/index')))
const ViewListJob = Loadable(lazy(() => import('views/viewJobs/Default')))
const ViewJobsMembers = Loadable(lazy(() => import('views/appliedMembers/Default')))
const DefaultRedirect = Loadable(lazy(() => import('views/default/index')))
import PrivateRoute from 'PrivateRoute';

// ==============================|| MAIN ROUTING ||============================== //
const MainRoutes = {
  path: '/',
  element: <MainLayout />,
  children: [
    {
      path: '/',
      element: (
        <PrivateRoute>
          <DefaultRedirect />
        </PrivateRoute>
      )
    },
    {
      path: 'dashboard',
      element: (
        <PrivateRoute>
          <DashboardDefault />
        </PrivateRoute>
      )
    },
    {
      path: 'jobs',
      element: (
        <PrivateRoute>
          <UserJobList />
        </PrivateRoute>
      )
    },
    {
      path: 'list-new-job',
      element: (
        <PrivateRoute>
          <ListNewJob />
        </PrivateRoute>
      )
    },
    {
      path: 'job-listing',
      element: (
        <PrivateRoute>
          <ViewListJob />
        </PrivateRoute>
      )
    },
    {
      path: 'view-jobs',
      element: (
        <PrivateRoute>
          <ViewJobsMembers />
        </PrivateRoute>
      )
    },
    {
      path: '*',
      element: (
        <PrivateRoute>
          <DashboardDefault />
        </PrivateRoute>
      )
    }
  ]
};

export default MainRoutes;
