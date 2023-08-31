import React, { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
const Register = () => {
  const [name, setname] = useState("");
  const [password, setpassword] = useState("");
  const Navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    if (name.length < 4 || password.length < 4) {
      alert("Name and password should be more than four character");
    } else if (name === "" && password == "") {
      alert("Name or password is required");
    } else {
      localStorage.setItem("name", name);
      localStorage.setItem("password", password);
      alert("User Saved!");
      Navigate("/Login");
    }
  };

  return (
    <>
      <div>
        <div className="container content mt-4">
          <span>
            <ToastContainer />
          </span>

          <h5> 📝 Add New User</h5>
          <div className="row border p-4">
            <div className="col-md-6">
              <div className="mb-3">
                <label className="form-label">User Name</label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setname(e.target.value)}
                  className="form-control"
                />
              </div>

              <div className="mb-3">
                <label className="form-label">Password</label>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setpassword(e.target.value)}
                  className="form-control"
                />
              </div>

              <button
                type="submit"
                className="form__submit-btn"
                onClick={handleSubmit}
              >
                Submit
              </button>
            </div>
            <button className="btn btn-white">
              <NavLink to="/Login">Login</NavLink>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
export default Register;
