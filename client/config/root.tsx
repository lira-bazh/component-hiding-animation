import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { App } from "../components";
import "./root.scss";

const Root = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App/>} />
        <Route path="*" element={<h3>404</h3>} />
      </Routes>
    </BrowserRouter>
  )
}

export default Root