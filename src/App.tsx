import './App.css';
import { router } from './router/router';
import store from "./store/store";
import { RouterProvider } from 'react-router-dom';
import { Provider } from "react-redux";


export const App = ():JSX.Element => {
  return (
    <Provider store={store}>
      <RouterProvider router={router} />
      </Provider>
      )
}

