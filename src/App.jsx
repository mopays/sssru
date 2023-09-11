import './App.css';
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import React from "react";
import Navbar from "./components/Navbar/Navbar.jsx";
import Footer from "./components/Footer/footer";
import Home from "./pages/home/Home";
import Cart from "./pages/home/Cart/Cart";
import Details from "./pages/details/Details";
// import Login from "./pages/Login/login";
import Register from "./pages/register/regiter";


function App() {


  const Layout =() =>{
    return(
      <div className="app">
        <Navbar/>
        <Outlet/>
        <Footer/>
      </div>
    );
  };

  const Layout1 =() =>{
    return(
      <div>
        <Outlet/>
      </div>
    );
  };


  const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout/>,
    children: [
      {
        path: "/",
        element: <Home />,
      },{
        path: "/details",
        element: <Details />,
      },{
        path: "/cart",
        element: <Cart />,
      }
    ]
    },{
      path: "/",
      element: <Layout1/>,
      children: [
      //  {
      //     path: "/login",
      //     element: <Login />,
      //   },
        // {
        //   path: "/register",
        //   element: <Register />,
        // }
      ]
    }
  ])

  return <RouterProvider router={router} />







}
export default App;
