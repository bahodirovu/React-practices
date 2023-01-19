import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Counter from "./Counter/Counter";
import Modal from "./Modal/Modal";
import Navbar from "./NavBar/Navbar";
import Quiz from "./Quiz/Quiz";


function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/count" element={<Counter />}></Route>
        <Route path="/modal" element={<Modal />}></Route>
        <Route path="*" element={<Quiz to="/quiz" replace />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
