import { createContext,useState } from "react";
import AboutUs from "./about/AboutUs";
import ContactUs from "./contact/ContactUs";
import Jobs from "./Components/Jobs";
import Press from "./Components/Press";
import SignUp from "./Components/SignUp";
import Courses from "./courses/Courses";
import Home from "./home/Home";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import  { Toaster } from "react-hot-toast";



export const Context = createContext(); 

function App() {
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);

  const openLoginModal = () => {
    setIsLoginModalOpen(true);
  };

  const closeLoginModal = () => {
    setIsLoginModalOpen(false);
  };

  const initialAuthUser = localStorage.getItem("Users");
  const [authUser,setAuthUser] = useState(initialAuthUser?JSON.parse(initialAuthUser):undefined);

  return (
    <Context.Provider
      value={{
        isLoginModalOpen,
        authUser,
        setIsLoginModalOpen,
        openLoginModal,
        closeLoginModal,
        setAuthUser,
      }}
    >
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/courses" element={authUser?<Courses />:<Navigate to = "/signup"/>} />
          {/* <Route path="/courses" element={<Courses />} /> */}
          <Route path="/signup" element={<SignUp />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/jobs" element={<Jobs />} />
          <Route path="/press" element={<Press />} />
        </Routes>
        <Toaster />
      </Router>
    </Context.Provider>
  );
}

export default App;
