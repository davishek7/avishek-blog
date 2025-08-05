import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import "react-toastify/dist/ReactToastify.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "./layouts/RootLayout";
import Posts from "./routes/Posts";
import PostDetail from "./routes/PostDetail";
import Contact from "./routes/Contact";
import About from "./routes/About";
import NotFound from "./routes/NotFound";
import { postsLoader } from "./loaders/posts.loader";
import { postDetailsLoader } from "./loaders/postDetails.loader";
import { aboutLoader } from "./loaders/about.loader";
import { contactLoader } from "./loaders/contact.loader";
import { contactAction } from "./actions/contact.action";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        path: "/",
        element: <Posts />,
        loader: postsLoader,
      },
      {
        path: "/posts/:slug",
        element: <PostDetail />,
        loader: postDetailsLoader,
      },
      {
        path: "/about",
        element: <About />,
        loader: aboutLoader,
      },
      {
        path: "/contact",
        element: <Contact />,
        loader: contactLoader,
        action: contactAction,
      },
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
