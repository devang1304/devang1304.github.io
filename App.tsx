import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./src/components/Layout";
import Home from "./src/pages/Home";
import Experience from "./src/pages/Experience";

export default function App() {
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
