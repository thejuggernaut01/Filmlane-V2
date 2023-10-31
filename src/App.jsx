import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";

import { AuthProvider } from "./store/AuthContext";
import { Provider } from "./store/context";
import RootRoute from "./Pages/RootRoute";
import Header from "./Layout/Header";
import SignUp from "./Layout/User/SignUp";
import Login from "./Layout/User/Login";
import UploadMovie from "./Pages/UploadMovie";
import MovieRoute from "./Pages/MovieRoute";
import MovieDetails from "./Pages/MovieDetails";
import ShowingMovies from "./Layout/ShowingMovies";
import Cart from "./Pages/Cart";
import Checkout from "./Pages/Checkout";

// Hanko
import HankoAuth from "./Layout/User/HankoAuth";
import HankoProfile from "./Layout/User/HankoProfile";

function App() {
  const router = createBrowserRouter([
    {
      path: "",
      element: <RootRoute />,
      children: [
        { index: true, element: <Header /> },
        { path: "auth", element: <HankoAuth /> },
        // { path: "sign-in", element: <Login /> },
        { path: "dashboard", element: <HankoProfile /> },
        { path: "upload-movie", element: <UploadMovie /> },

        {
          path: "movies",
          element: <MovieRoute />,
          children: [
            { index: true, element: <ShowingMovies /> },
            { path: ":movieId", element: <MovieDetails /> },
            { path: ":movieId/cart", element: <Cart /> },
          ],
        },
        { path: "checkout", element: <Checkout /> },
      ],
    },
  ]);

  return (
    <>
      <AuthProvider>
        <Provider>
          <RouterProvider router={router} />
        </Provider>
      </AuthProvider>
    </>
  );
}

export default App;
