import Header from "./components/Header";
import Profile from "./pages/Profile";
import Projects from "./pages/Projects";
import NotFound from "./pages/NotFound";
import logo from "./assets/logo.svg";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header logo={logo} />
        {/* <Profile userName="Mickey374" /> */}
        <Routes>
          <Route path="/" element={<Profile userName="Mickey374" />} />
          <Route path="/projects" element={<Projects userName="Mickey374" />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
