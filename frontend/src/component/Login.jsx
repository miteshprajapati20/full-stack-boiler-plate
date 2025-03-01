import { useState } from "react";

export default function Login() {
  const [loginForm, setLoginForm] = useState({ email: "", password: "", gender:"male", status:"" }); 
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
    <div>
      <h1>Login</h1>
      {isLoggedIn && <p>You are successfully logged IN!</p>}
      <form onSubmit={handleLogin}>

        <label htmlFor="email">Email:</label>
        <input
          type="email"
          name="email"
          value={loginForm.email}
          onChange={inputChangeHandler}
        />
        <br />

        <label htmlFor="password">Password:</label>
        <input
          type="password"
          name="password"
          value={loginForm.password}
          onChange={inputChangeHandler}
        />
        <br />

        <button type="submit" disabled={isLoading}>
          {isLoading ? "Logging In..." : "Login"}
        </button>
      </form>
    </div>
  );
}
