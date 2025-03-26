import { PATH } from "./path";
import { Layout } from "../layout";
import { Planets } from "../pages/planets";
import { Characters } from "../pages/characters";
import { createBrowserRouter } from "react-router-dom";
import { Details } from "../pages/details";

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
        <Details />
      </Layout>
    ),
  },
]);
