import { toast } from "react-toastify";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
const Login = () => {
  const [name, setname] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const nam = localStorage.getItem("name", name);
  const pass = localStorage.getItem("password", password);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name === "" && password === "") {
      alert("Name and Password is Required");
    } else if (name != nam || password != pass) {
      alert("Password or Name Invalid");
    } else if (name == nam && password == pass) {
      alert("Login Success");
      navigate("/Todo");
    } else {
      ("ok ");
    }
  };
  return (
    <div className="form__container m-4 d-flex felx-column justify-content-left">
      <form>
        Enter Name
        <input
          type="text"
          className="form-control m-2"
          value={name}
          onChange={(e) => setname(e.target.value)}
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
        />
        Enter Passowrd
        <input
          type="password"
          className="form-control m-2"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          id="exampleInputPassword1"
        />
        <p>
          Don't Have An Account? <Link to="/">Signup !</Link>
        </p>
        <button type="submit" className="form__button" onClick={handleSubmit}>
          Login
        </button>
      </form>
    </div>
  );
};
export default Login;
