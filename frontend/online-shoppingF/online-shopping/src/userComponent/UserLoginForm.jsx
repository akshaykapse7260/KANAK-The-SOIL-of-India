import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import ForgotPassword from "../pages/ForgotPassword";

const UserLoginForm = () => {
  let navigate = useNavigate();

  const [loginRequest, setLoginRequest] = useState({
    emailId: "",
    password: "",
    role: "",
  });

  const handleUserInput = (e) => {
    setLoginRequest({ ...loginRequest, [e.target.name]: e.target.value });
  };

  const loginAction = (e) => {
    fetch("http://localhost:8080/api/user/login", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(loginRequest),
    }).then((result) => {
      console.log("result", result);
      result.json().then((res) => {
        console.log(res);

        if (res.role === "Admin") {
          console.log("Working fine:)");
          sessionStorage.setItem("active-admin", JSON.stringify(res));
        } else if (res.role === "Customer") {
          sessionStorage.setItem("active-user", JSON.stringify(res));
        } else if (res.role === "Delivery") {
          sessionStorage.setItem("active-delivery", JSON.stringify(res));
        }

        toast.success("Logged in successfully!", {
          position: "top-center",
          autoClose: 1000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });

        navigate("/home");
        window.location.reload(true);
      });
    });
    e.preventDefault();
  };

  
  const containerStyle = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: "100vh",
   
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
   
    
    backgroundSize: "208vh",
    backgroundPosition: "center",
    //backgroundRepeat: "no-repeat", // Prevent image repetition
    opacity: "0.85",

  };

  const cardStyle = {
    width: "25rem",
    background: "#fff",
    border: "1px solid #c3ccda",
    boxShadow:
      "0 2px 4px rgba(0, 0, 10, 0.64), 0 8px 16px rgba(7, 142, 183, 0.34)",
    borderRadius: "8px",
    padding: "1rem",
    alignItems: "center",
    textAlign: "center",
    opacity: "2.0",
  };

  const titleStyle = {
    background: "#0070f3",
    color: "#fff",
    padding: "0.5rem 0",
    borderRadius: "8px",
  };

  const inputStyle = {
    borderRadius: "20px",
    border: "2px solid lightgrey",
    outline: "none",
    color: "#1d2129",
    margin: "2% 0",
    width: "90%",
    padding: "12px",
    fontSize: "16px",
  };

  const buttonStyle = {
    background: "#0070f3",
    color: "#fff",
    borderRadius: "8px",
    border: "none",
    outline: "none",
    padding: "10px 20px",
    marginTop: "1rem",
    fontSize: "16px",
    cursor: "pointer",
  };

  return (
    <div style={containerStyle}>
      <div style={cardStyle}>
        <div style={titleStyle}>
          <h4>User Login</h4>
        </div>
        <div style={{ marginTop: "1rem" }}>
          <form>
            <div>
              <label style={{ fontWeight: "bold", color: "#333" }}>
                <b>User Role</b>
              </label>
              <select
                onChange={handleUserInput}
                style={inputStyle}
                name="role"
              >
                <option value="0">Select Role</option>
                <option value="Admin">Admin</option>
                <option value="Customer">Customer</option>
                <option value="Delivery">Delivery Person</option>
              </select>
            </div>

            <div style={{ marginTop: "1rem" }}>
              <label style={{ fontWeight: "bold", color: "#333" }}>
                <b>Email Id</b>
              </label>
              <input
                type="email"
                style={inputStyle}
                id="emailId"
                name="emailId"
                onChange={handleUserInput}
                value={loginRequest.emailId}
              />
            </div>
            <div style={{ marginTop: "1rem" }}>
              <label style={{ fontWeight: "bold", color: "#333" }}>
                <b>Password</b>
              </label>
              <input
                type="password"
                style={inputStyle}
                id="password"
                name="password"
                onChange={handleUserInput}
                value={loginRequest.password}
                autoComplete="on"
              />
            </div>
            <button
              type="submit"
              style={buttonStyle}
              onClick={loginAction}
            >
              Login
            </button>
            <Link to="/forgot-password">Forgot Password?</Link>
            <ToastContainer />
          </form>
        </div>
      </div>
    </div>
  );
};

export default UserLoginForm;




