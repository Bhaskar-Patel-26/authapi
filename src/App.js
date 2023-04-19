import "./App.css";
import Register from "./components/Register";
import PasswordChangeForm from "./components/ChangePassword";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginForm from "./components/Login";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <h2 className="mt-5 mb-5">Thanks Form Visiting</h2>
        <Routes>
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<LoginForm />} />
          <Route path="/passwordchange" element={<PasswordChangeForm />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
