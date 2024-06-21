import { createBrowserRouter } from 'react-router-dom';

import { LoginForm } from 'login/login';
import { LoginPage } from 'Pages/LoginPage';
import { TimeCopmonent } from 'components/Time';
import { Panel } from 'components/Panel/panel';
import { Root } from 'root';
import { PageFoundain } from 'CascadePages/PageFoundain/PageFoundain';
import { Children } from 'react';
import { ContentObject } from 'CascadePages/ContentObject/ContentObject';

export const router = createBrowserRouter([
  {
    path: "/",
    element: <LoginPage />,

  },
  {
    
    path: "/PageFoundain",
    element: <PageFoundain/>,
    children: [
      {
        index: true,
        element: <ContentObject/>,
      }
    ],
    
  }
]);
