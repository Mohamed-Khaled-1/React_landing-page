import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "../components/Layout/Layout.jsx";
import Home from "../components/Home/Home.jsx";
import About from "../components/About/About.jsx";
import Protofolio from "../components/Protofolio/Protofolio.jsx";
import ContactForm from "../components/Contact/Contact.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: "about", element: <About /> },
      { path: "portfolio", element: <Protofolio /> },
      { path: "contact", element: <ContactForm /> },
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
