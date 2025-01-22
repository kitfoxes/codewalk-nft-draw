import React, { useState } from "react";
import WhiteBoard from "./whiteboard";
import Home from "./home";
import { Excalidraw, WelcomeScreen } from "@excalidraw/excalidraw";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";
import { Theme } from "@radix-ui/themes";
import Test from "./Test";
function App() {
  return (
    <>
      <Theme >
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/whiteboard" element={<WhiteBoard />} />
            <Route path="/test" element={<Test />} />
          </Routes>
        </BrowserRouter>
      </Theme>
    </>
  );
}
export default App;
