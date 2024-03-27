import { Routes, Route, Link } from "react-router-dom"
import HomePage from "./pages/HomePage";
import UserPage from "./pages/UserPage";
import NotFoundPage from "./pages/NotFoundPage";
import "./App.css"
import RegisterPage from "./pages/RegisterPage";

function App() {
  return (
    <div className="App">
      {/* <div className="header">
        <Link className="link" to={"/"}>UsersCard</Link>
      </div> */}
      <Routes>
        <Route path="/" element={<RegisterPage />} />
        <Route path="/userlist" element={<HomePage />} />
        <Route path="/user/:id" element={<UserPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>

    </div>
  );
}

export default App;
