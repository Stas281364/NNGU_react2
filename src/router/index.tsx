import { createBrowserRouter } from 'react-router-dom';

import { LoginForm } from 'login/login';
import { LoginPage } from 'Pages/LoginPage';
import { TimeCopmonent } from 'components/Time';
import { Panel } from 'components/Panel/panel';
import { Root } from 'root';
import { PageFoundain } from 'CascadePages/PageFoundain/PageFoundain';
import { Children } from 'react';

export const router = createBrowserRouter([
  {
    path: "/",
    element: <PageFoundain />,

    children: [
      {
        path: "/123",
        element: <LoginForm/>,
      },
    ],
  },
  {
    
  }
]);
