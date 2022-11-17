import "./App.css";
import { Login } from "./components/login/Login";
import { Homepage } from "./components/homepage/Homepage";
import { Register } from "./components/register/Register";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
function App() {
  const [username, setUsername] = useState("");

  return (
    <BrowserRouter>
      <Routes>
        {username && (
          <Route
            exact
            path="/"
            element={<Homepage username={username} setUsername={setUsername} />}
          />
        )}

        <Route
          exact
          path="/login"
          element={<Login setUsername={setUsername} />}
        />
        <Route exact path="/register" element={<Register />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
