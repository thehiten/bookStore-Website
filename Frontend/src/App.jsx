import React from "react";
import Home from "./home/Home";
import Courses from "./courses/courses";
import Signup from "./components/Signup";
import Contact from "./contact/contact";
import { Navigate, Route, Routes } from "react-router-dom";
import { useAuth } from "./context/AuthProvider";
import About from "./components/About";
function App() {
  const [authUser, setAuthUser] = useAuth();
  console.log(authUser);
  return (
    <>
      <div>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route
            path="/course"
            element={authUser ? <Courses /> : <Navigate to={"/signup"} />}
          />
          <Route path="/signup" element={<Signup />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
          <Route path="/about" element={<About />}></Route>
        </Routes>
      </div>
    </>
  );
}

export default App;
