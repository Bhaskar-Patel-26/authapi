import { useState } from "react";
import axios from "axios";

const PasswordChangeForm = ({ token }) => {
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      token = localStorage.getItem("access");

      console.log(token);
      const response = await axios.post(
        "https://bhaskar26.pythonanywhere.com/api/user/changepassword/",
        {
          password: password,
          password2: password2,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log(response.data.msg); // Password changed successfully
      alert("Password Changed Successfully");
    } catch (error) {
      console.error(error.response.data);
      alert(error.response.data.errors.non_field_errors);
    }
  };

  return (
    <>
      <h2>PassWord Change</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="password"
          placeholder="Enter Password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />
        <input
          type="password"
          placeholder="Reenter password"
          value={password2}
          onChange={(event) => setPassword2(event.target.value)}
        />
        <button type="submit">Change password</button>
      </form>
    </>
  );
};

export default PasswordChangeForm;
