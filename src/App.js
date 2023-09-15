import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home  from './Home';
import Orders from './Orders';
import NotFound from './NotFound';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;