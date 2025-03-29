import { PATH } from "./path";
import { Layout } from "../layout";
import { Planets } from "../pages/planets";
import { DetailsPage } from "../pages/details";
import { Favorites } from "../pages/favorites";
import { Characters } from "../pages/characters";
import { createBrowserRouter } from "react-router-dom";

export const routes = createBrowserRouter([
  {
    path: PATH.CHARACTERS,
    element: (
      <Layout>
        <Characters />
      </Layout>
    ),
  },
  {
    path: PATH.PLANETS,
    element: (
      <Layout>
        <Planets />
      </Layout>
    ),
  },
  {
    path: PATH.DETAILS,
    element: (
      <Layout>
        <DetailsPage />
      </Layout>
    ),
  },
  {
    path: PATH.FAVORITES,
    element: (
      <Layout>
        <Favorites />
      </Layout>
    ),
  },
]);
