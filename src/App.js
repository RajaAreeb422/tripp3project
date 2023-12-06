import { Route, Routes } from "react-router-dom";
import "./App.css";
import MainScreen from "./pages/MainScreen";
import Menu from "./components/Menu";
import Register from "./components/Register";
import Dashboard from "./components/Dashboard";
import Login from "./components/Login";
import Peopleofitribe from "./components/Peopleofitribe";

function App() {
  return (
    <div>
      <section className="top-menu">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-12">
              <Menu />
            </div>
          </div>
        </div>
      </section>

      {/* <MainScreen /> */}

      <Routes>
        <Route path="/" element={<MainScreen />} />

        <Route path="/register" element={<Register />} />
        <Route path="/login"  element={<Login />}  />
        <Route path="/dashboard"  element={<Dashboard />} />
        <Route path="/peoples"  element={<Peopleofitribe />}  />
      </Routes>
    </div>
  );
}

export default App;
