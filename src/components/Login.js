import { useState } from "react";
import axios from "axios";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post("https://bhaskar26.pythonanywhere.com/api/user/login/", {
        email,
        password,
      });
      console.log(response.data.token); // JWT token
      alert("Login Sucessfully")
      localStorage.setItem("access", response.data.token.access)
    } catch (error) {
        alert(error.response.data.errors.non_field_errors
            )
      console.error(error.response.data);
    }
  };

  return (
    <>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />
        <button type="submit">Login</button>
      </form>
    </>
  );
};

export default LoginForm;
