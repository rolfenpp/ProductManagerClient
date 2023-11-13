import React, { useState } from "react";

const Login = ({ setLogin }) => {
  const [userName, setUsername] = useState("");
  const [password, setPassword] = useState("");
  /* const [user, setUser] = useState(""); */

  const handleUsername = (e) => {
    setUsername(e.target.value);
  };
  const handlePassword = (e) => {
    setPassword(e.target.value);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("https://localhost:7000/auth", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username: userName, password: password }),
      });
      if (response.ok) {
        const data = await response.json();
        const token = data.token;
        console.log("Authentication successful. Token:", token);
        setLogin(true);
      } else {
        console.error("Authentication failed.");
      }
    } catch (error) {
      console.error("Error during authentication:", error);
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <input
          placeholder="Username"
          value={userName}
          onChange={handleUsername}
          type="text"
        />
      </div>
      <div>
        <input
          placeholder="password"
          value={password}
          onChange={handlePassword}
          type="password"
        />
      </div>
      <button>Login</button>
    </form>
  );
};

export default Login;
