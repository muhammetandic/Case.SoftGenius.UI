import React from "react";
import ReactDOM from "react-dom/client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Layout } from "./base/Layout.jsx";
import { ErrorPage } from "./base/ErrorPage.jsx";
import { WelcomePage } from "./base/WelcomePage.jsx";
import { UsersPage } from "./features/users/UsersPage.jsx";
import { CountriesPage } from "./features/countries/CountriesPage.jsx";
import "semantic-ui-css/semantic.min.css";
import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <WelcomePage />,
      },
      {
        path: "/users",
        element: <UsersPage />,
      },
      {
        path: "/countries",
        element: <CountriesPage />,
      },
    ],
  },
  ,
]);

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  </React.StrictMode>,
);
