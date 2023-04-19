import { useState } from "react";
import axios from "axios";

const RegistrationForm = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post(
        "https://bhaskar26.pythonanywhere.com/api/user/register/",
        {
          email,
          name: username,
          password,
          password2,
          tc: "True",
        }
      );
      console.log(response.data.msg); // User registered successfully
      alert("User Register Successfull");
    } catch (error) {
      setError(error.message);
    }
    alert(error);
  };

  return (
    <div className="d-flex flex-column">
      <h2>Register</h2>
      <form onSubmit={handleSubmit} className="">
        <input
          className="form-control w-50"
          type="text"
          placeholder="Username"
          value={username}
          required
          onChange={(event) => setUsername(event.target.value)}
        />
        <input className="form-control w-50"
          type="email"
          placeholder="Email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
        <input className="form-control w-50"
          type="password"
          placeholder="Password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />
        <input className="form-control w-50"
          type="password"
          placeholder="Password2"
          value={password2}
          onChange={(event) => setPassword2(event.target.value)}
        />
        <button type="submit" className="form-control w-50">Register</button>
      </form>
    </div>
  );
};

export default RegistrationForm;
