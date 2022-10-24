import ArtistAlbum from "./pages/artistAlbums";
import Login from "./pages/login";
import ReRoute from "./pages/reroute";
import SearchArtist from "./pages/searchArtist";

const routes = [
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/search",
    element: <SearchArtist />,
  },
  {
    path: "/album/:id",
    element: <ArtistAlbum />,
  },
  {
    path: "/",
    element: <ReRoute />,
  },
];

export default routes;
