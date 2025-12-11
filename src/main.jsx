import { StrictMode, lazy, Suspense } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from "./App.jsx";
import Home from "./pages/Home.jsx";
import BookDetails from "./pages/BookDetails.jsx";
import PageNotFound from "./pages/PageNotFound.jsx";

import "./index.css";

// Lazy-loaded routes
const BrowseBooks = lazy(() => import("./pages/BrowseBooks.jsx"));
const AddBook = lazy(() => import("./pages/AddBook.jsx"));

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,

    children: [
      {
        index: true,
        element: <Home />,
      },

      {
        path: "books/:category",
        element: (
          <Suspense fallback={<div>Loading Books...</div>}>
            <BrowseBooks />
          </Suspense>
        ),
      },

      {
        path: "book/:id",
        element: <BookDetails />,
      },

      {
        path: "add",
        element: (
          <Suspense fallback={<div>Loading Add Book...</div>}>
            <AddBook />
          </Suspense>
        ),
      },
    ],

    errorElement: <PageNotFound />,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
