import React from "react";
import { Route, Routes } from "react-router-dom";

import Books from "./Books";

import SingleBook from "./SingleBook";


const MainRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Books />} />
        <Route path="/books/:id" element={<SingleBook />} />
       
      
        <Route path="*" element={<h1>Page Not Found</h1>} />
      </Routes>
    </div>
  );
};

export default MainRoutes;
