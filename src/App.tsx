import { RouterProvider } from 'react-router-dom';
import './global.css';
import { router } from './router';

export const App = () => {
  // console.log('render App');
  return <RouterProvider router={router} />;
};
