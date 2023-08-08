import { Route, Routes } from "react-router-dom"
import { routes } from "./routes"

import Layout from "../components/layout/Layout";

const AppRoutes = () => {
  return (
    <div>
      <Routes>
      {/* Rutas que se muestren en el navbar */}
      <Route element={<Layout />}>
        {routes.map(({ id, path, Element }) => (
          <Route key={id} path={path} element={<Element />} />
        ))}
      </Route>

    <Route path="*" element={<h2>404 not found</h2>} />
    </Routes>
    </div>
  )
}

export default AppRoutes
