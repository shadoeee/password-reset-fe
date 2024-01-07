import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

function Signin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("http://localhost:4000/users/signin", {
        email,
        password,
      });


    alert("Authentication successful!");

      console.log("Authentication successful!", response.data);
    } catch (error) {

    alert("Authentication failed. Please check your credentials and try again.");

      console.error("Authentication failed:", error.message);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="d-flex justify-content-center h-100">
        <div className="card signin">
          <div className="card-header">
            <h3 className="text-center">Sign In</h3>
          </div>
          <div className="card-body">
            <label className="labels">Email</label>
            <div className="input-group form-group">
              <input
                type="text"
                className="form-control"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <br />
            <label className="labels">Password</label>
            <div className="input-group form-group">
              <input
                type="password"
                className="form-control"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <br />
            <div className="form-group text-center">
              <input
                type="submit"
                value="Login"
                className="btn login_btn"
              />
            </div>
          </div>
          <div className="card-footer">
            <div className="d-flex justify-content-center links">
              Don't have an account?<Link to="/sign-up">Sign Up</Link>
            </div>
            <div className="d-flex justify-content-center links">
              <Link to="/forgot-password">Forgot your password?</Link>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
}

export default Signin;
