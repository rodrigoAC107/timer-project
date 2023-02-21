import { useState } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { routes } from "./model";
import { Countdown, Timer } from "./pages";
import "./App.scss";
import { Navbar } from "./components";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <div className="Routes">
          <Routes>
            <Route path="/" element={<Navigate to={routes.COUNTDOWN} />} />
            <Route path={routes.COUNTDOWN} element={<Countdown />} />
            <Route path={routes.TIMER} element={<Timer />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
