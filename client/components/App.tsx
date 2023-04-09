import React, { useState } from 'react'
import { Blocks } from "./Blocks";
import './style.scss'

export const App = () => {
  return (
    <>
      <h1>Блоки без анимации</h1>
      <div className="blocks without-animation">
        <Blocks />
      </div>
      <h1>Блоки с анимацией</h1>
      <div className="blocks with-animation">
        <Blocks />
      </div>
    </>
  );

}
