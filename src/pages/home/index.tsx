import React from "react"
import { Link } from "react-router-dom"

const Home: React.FC = () => {
  return (
    <div className="h-[90vh] flex items-center justify-center bg-gray-100">
      <div className="text-center">
        <h1 className="text-3xl font-bold mb-6">Welcome to the Payment Workflow</h1>
        <Link
          to="/workflow"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Go to Workflow
        </Link>
      </div>
    </div>
  )
}

export default Home
