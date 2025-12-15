import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/footer/footer"
import Home from "./pages/Home/Home";
import Projects from "./pages/Project/Project";
import About from "./pages/About/About";
import Contact from "./pages/ContactUs/ContactUs";
import "./App.css";
import { useEffect } from "react";

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="app">
        <Header />
        <main>
          <Routes>
            <Route 
            path="/" 
            element={<Home />} />
            <Route 
            path="/projects" 
            element={<Projects />} />
            <Route 
            path="/about" 
            element={<About />} />
            <Route 
            path="/contact" 
            element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  )
}

export default App;