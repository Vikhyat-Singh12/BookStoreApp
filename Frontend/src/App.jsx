import { createContext,useState } from "react";
import AboutUs from "./about/AboutUs";
import ContactUs from "./contact/ContactUs";
import Jobs from "./Components/Jobs";
import Press from "./Components/Press";
import SignUp from "./Components/SignUp";
import Courses from "./courses/Courses";
import Home from "./home/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


export const Context = createContext(); 

function App() {
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);

  const openLoginModal = () => {
    setIsLoginModalOpen(true);
  };

  const closeLoginModal = () => {
    console.log("Closing modal..."); // Debugging log
    setIsLoginModalOpen(false);
  };


  return (
    <Context.Provider
      value={{
        isLoginModalOpen,
        setIsLoginModalOpen,
        openLoginModal,
        closeLoginModal,
      }}
    >
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/jobs" element={<Jobs />} />
          <Route path="/press" element={<Press />} />
        </Routes>
      </Router>
    </Context.Provider>
  );
}

export default App;
