import React from 'react'
import {
  createRoutesFromElements,
  createBrowserRouter,
  Route,
  RouterProvider,
} from "react-router-dom";
import Home from './pages/Home';
import Service from './pages/Service'
import About from './pages/About';
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/"element={<Home />}></Route>
      <Route path="/service" element={<Service />}></Route>
      <Route path="/about" element={<About />}></Route>
    </Route>
  )
);

const App = () => {
  return (
    <RouterProvider router={router} />
  )
}

export default App