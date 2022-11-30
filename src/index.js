import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
  Route,
} from "react-router-dom";

import './index.css';
import reportWebVitals from './reportWebVitals';
import { PokePage } from './pages/PokePage';
import { HomePage } from './pages/HomePage';
import { PokedexPage } from './pages/PokedexPage';
import { BookMarkListComposant } from './composants/BookMarkListComposant';
import { Redirect } from './composants/Redirect';

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage/>,
  },
  {
    path: "pokedex/:offset",
    element: <PokedexPage />,
  },
  {
    path: "pokemon/:pokemonId",
    element: <PokePage />,
  },
  {
    path: "redirect/:page/:Id",
    element: <Redirect />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
      <RouterProvider router={router} />
      <BookMarkListComposant/>
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
