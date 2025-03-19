import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";
import { Analytics } from "@vercel/analytics/react"

// Code splitting
const Home = lazy(() => import("./pages/Home"));
const Projects = lazy(() => import("./pages/Projects"));

// Loading component
const PageLoader = () => (
  <div className="flex justify-center items-center min-h-screen">
    <div className="animate-pulse">
      <div className="h-8 bg-primary/30 rounded w-48 mb-6"></div>
      <div className="h-4 bg-gray-300/30 rounded w-64 mb-4"></div>
      <div className="h-4 bg-gray-300/30 rounded w-56 mb-4"></div>
      <div className="h-4 bg-gray-300/30 rounded w-72"></div>
    </div>
  </div>
);

function App() {
  return (
    <Router>
      <div className="relative min-h-screen bg-base">
        {/* Global background gradient */}
        <div className="fixed inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5 pointer-events-none"></div>

        {/* Main content */}
        <div className="relative z-0">
          <Suspense fallback={<PageLoader />}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/projects" element={<Projects />} />
            </Routes>
            <Analytics />
          </Suspense>
        </div>
      </div>
    </Router>
  );
}

export default App;
