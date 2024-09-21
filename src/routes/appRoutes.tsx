import React from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from "../pages/home"
import Workflow from "../pages/workflow"

const AppRoutes: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/workflow" element={<Workflow />} />
      </Routes>
    </Router>
  )
}

export default AppRoutes
