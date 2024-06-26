import { RouterProvider } from 'react-router-dom';
import './global.css';
import { router } from './router';
import { Provider } from 'react-redux';
import { rootStore } from 'store';

export const App = () => {
  // console.log('render App');
  
  return(
    <Provider store={rootStore} >
      <RouterProvider router={router} />
    </Provider>
  
  );
};
