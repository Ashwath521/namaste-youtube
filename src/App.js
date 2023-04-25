import "./App.css";
import Head from "./components/Head";
import Body from "./components/Body";
import { Provider } from "react-redux";
import store from "./utils/store";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainContainer from "./components/MainContainer";
import WatchPage from "./components/WatchPage";
// import DemoComponent from "./components/DemoComponent";
// import Demo2 from "./components/Demo2";
import SignUp from "./components/SignUp";
import { ToastContainer } from "react-toastify";
// import { useState } from "react";
import "react-toastify/dist/ReactToastify.css";
import SignIn from "./components/SignIn";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Body />,
    children: [
      {
        path: "/",
        element: <MainContainer />,
      },
      {
        path: "watch",
        element: <WatchPage />,
      },
      {
        path: "signup",
        element: <SignUp />,
      },
      {
        path: "signin",
        element: <SignIn />,
      },
    ],
  },
]);

function App() {
  return (
    <>
      <Provider store={store}>
        <div className="App">
          <Head />
          <RouterProvider router={appRouter} />
          {/**
           * Head
           * Body
           *  sidebar
           *    MenuItems
           *  Main Container
           *    Button List
           *  video container
           *     video Card
           */}
        </div>
      </Provider>
      <ToastContainer
        autoClose={4000}
        className="top-0 w-screen p-0"
        closeOnClick
        hideProgressBar
        limit={2}
        pauseOnFocusLoss
        pauseOnHover
        position="top-center"
        style={{ width: "1500px" }}
        // class=" top-0 w-screen p-0"
      />
    </>
  );
}

export default App;
