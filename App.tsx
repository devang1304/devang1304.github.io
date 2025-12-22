import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./src/components/Layout";
import Home from "./src/pages/Home";
import Experience from "./src/pages/Experience";

export default function App() {
  useEffect(() => {
    const link = document.createElement("link");
    link.href =
      "https://fonts.googleapis.com/css2?family=Patrick+Hand&family=Space+Mono:ital,wght@0,400;0,700;1,400&display=swap";
    link.rel = "stylesheet";
    document.head.appendChild(link);
  }, []);

  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/experience" element={<Experience />} />
        </Routes>
      </Layout>
    </Router>
  );
}
