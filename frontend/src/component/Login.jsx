import { useState } from "react";
import '../style/Login.css';

export default function Login() {
  const [loginForm, setLoginForm] = useState({ email: "", password: ""}); 
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLoading, setIsLoading] = useState(false); 

  async function handleLogin(event) {
    event.preventDefault();
    setIsLoading(true); 
    try {
      const user = await fetch('http://localhost:5000/login', {
        method: 'POST',
        headers: {
          'content-type': 'application/json',
        },
        body: JSON.stringify(loginForm),
      });

      const response = await user.json();
      if (response) {
        setIsLoggedIn(true);
      } else {
        alert("Login failed!");
      }
    } catch (error) {
      console.error("Login error:", error);
      alert("An error occurred while logging in.");
    } finally {
      setIsLoading(false);
    }
    console.log('loginform : ', loginForm);
  }

  function inputChangeHandler(event) {
    const { name, value } = event.target;
    setLoginForm((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  }

  return (
    <div className="login-container">
      <div className="login-box">
        <div className="login-details-container">
          <div className="login-details"> 
            <h1 className="login-title">Welcome Back</h1>
            <p className="login-desc">Sign in to your MedTrack account</p>
          </div>
        </div>

        <div className="line">
        </div>

        <div className="login-form-container">
          <form onSubmit={handleLogin} className="login-form">
            <div className="form-group">
              <label htmlFor="email">Email<span className="required-field">*</span></label>
              <svg className="" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
              </svg>
              <input
                type="email"
                name="email"
                value={loginForm.email}
                onChange={inputChangeHandler}
                placeholder="Enter email"
              />
            </div>

            <div className="form-group">
              <label htmlFor="password">Password<span className="required-field">*</span></label>
              <svg className="" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd"></path>
              </svg>
              <input
                type="password"
                name="password"
                value={loginForm.password}
                onChange={inputChangeHandler}
                placeholder="Enter password"
              />

              {/* need to implement */}
              {/* <svg className="password-on" id="show-password" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M10 12a2 2 0 100-4 2 2 0 000 4z"></path>
                  <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd"></path>
              </svg>

              <svg className="password-on" id="hide-password" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M3.707 2.293a1 1 0 00-1.414 1.414l14 14a1 1 0 001.414-1.414l-1.473-1.473A10.014 10.014 0 0019.542 10C18.268 5.943 14.478 3 10 3a9.958 9.958 0 00-4.512 1.074l-1.78-1.781zm4.261 4.26l1.514 1.515a2.003 2.003 0 012.45 2.45l1.514 1.514a4 4 0 00-5.478-5.478z" clipRule="evenodd"></path>
                <path d="M12.454 16.697L9.75 13.992a4 4 0 01-3.742-3.741L2.335 6.578A9.98 9.98 0 00.458 10c1.274 4.057 5.065 7 9.542 7 .847 0 1.669-.105 2.454-.303z"></path>
              </svg> */}

            </div>

            <div className="forgot-password">
              <p>Forgot Password?</p>
            </div>
            <div className="login-btn-container">
              <button className="login-btn" type="submit" disabled={isLoading}>
                {isLoading ? "Logging In..." : "Login"}
              </button>
            </div>

          </form>
          <div className="no-account">
            <p>Don't have an account? Sign up</p>
          </div>
        </div>
      </div>
    </div>
  );
}
