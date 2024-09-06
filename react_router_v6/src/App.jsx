import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Movie } from "./pages/Movie";
import { Contact } from "./pages/Contact";
import AppLayout from "./components/layout/AppLayout";
import "./App.css";
import { ErrorPage } from "./pages/ErrorPage";
import { getMoviesData } from "./api/GetAPIData";
import { getMovieDetails } from "./api/GetMovieDetails";
import { MovieDetails } from "./components/UI/MovieDetails";
// import { NotFound } from "./pages/NotFound";

const App = () => {

  const router = createBrowserRouter([
    {
      path:"/",
      element:<AppLayout />,
      errorElement:<ErrorPage />,
      children:[
        {
          path:"/",
          element:<Home/>
        },
        {
          path:"/about",
          element:<About/>
        },
        {
          path:"/movie",
          element:<Movie/>,
          loader: getMoviesData,
        },
        {
          path:"/movie/:movieID",
          element:<MovieDetails />,
          loader: getMovieDetails,
        },
        {
          path:"/contact",
          element:<Contact/>
        },
        // {
        //   path:"*",
        //   element:<NotFound/>
        // }
      ],
    },

 
  ]);

//helper function

  // const router = createBrowserRouter(
  //   createRoutesFromElements(
  //     <>
  //      <Route path="/" element={<Home />} />
  //      <Route path="/about" element={<About />} />
  //      <Route path="/contact" element={<Contact />} />
  //      <Route path="/movie" element={<Movie />} />
  //     </>
  //   )
  // );


  return <RouterProvider router={router}/>;
};

export default App;