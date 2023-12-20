import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./components/Login.jsx";
import Main from "./components/Main.jsx";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" Component={Login} />
        <Route path="/main" Component={Main} />
        <Route path="/main/:pages/" Component={Main} />
        <Route path="/main/:pages/:subpages" Component={Main} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
