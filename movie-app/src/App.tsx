import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import React from "react";
import "./App.css";
import MainPage from "./pages/main/MainPage";
import InputPage from "pages/input/InputPage";

function App() {
  return (
    <Router>
      <div>
        <Link to="/main">
          <button
            type="submit"
            className="w-full text-white bg-rememberBlue focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            메인 페이지 이동
          </button>
        </Link>

        <Routes>
          <Route path="/main" element={<MainPage />} />
          <Route path="/insert" element={<InputPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
