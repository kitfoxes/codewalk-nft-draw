import React, { useState } from 'react';
import WhiteBoard from './whiteboard';
import Home from './home';
import { Excalidraw, WelcomeScreen } from '@excalidraw/excalidraw';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { BrowserRouter as Router } from "react-router-dom";
function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/whiteboard" element={<WhiteBoard />} />
        </Routes>
      </BrowserRouter>
      <Home />
    </>
  );
}
export default App;
