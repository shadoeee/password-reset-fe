import React from "react";
import { Route, Routes } from "react-router-dom";
import Sigin from "./components/Sigin";
import Signup from "./components/Signup";
import ForgotPassword from "./components/ForgotPassword";
import ResetPassword from "./components/ResetPassword";

function App() {
  const handleSignIn = (e) => {
    e.preventDefault();
    // task related to password reset. hence not handled the signin page
  };

  return (
    <div className="container">
      <Routes>
        <Route path="/" element={<Sigin handleSignIn={handleSignIn} />} />
        <Route path="/sign-up" element={<Signup />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="users/reset-password/:id" element={<ResetPassword />} />
      </Routes>
    </div>
  );
}

export default App;
