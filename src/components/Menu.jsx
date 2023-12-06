import Container from "react-bootstrap/Container";

import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import logo from "../assets/images/logo1.png";
import { MdDashboard, MdFeaturedPlayList } from "react-icons/md";
import { LiaPollSolid } from "react-icons/lia";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Menu = () => {
  const [login, setLogin] = useState(false);
  useEffect(() => {
    setLogin(false);
    console.log(localStorage);
    if (localStorage.getItem("id")) {

      setLogin(true);
    }

  }, []);
  return (
    <Navbar expand="lg">
      <Container fluid>
        <Navbar.Brand>
          <Link to="/">
            <img src={logo} className="logo" alt="iTribe-logo" width={"100%"} />
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav className="m-auto my-2 my-lg-0" navbarScroll>
            {login == true && (
              <Link to="/dashboard" className=" DashBorad">
                <MdDashboard /> DashBorad
              </Link>
            )}
            {login == true && (
              <Link to="/peoples" className=" DashBorad">
                <MdFeaturedPlayList />
                User List
              </Link>
            )}
            {login == true && (
              <Link className=" DashBorad">
                <LiaPollSolid /> Polls
              </Link>
            )}
          </Nav>

          <Link to="/login" className="login-btn mx-3">
            Login{" "}
          </Link>
          <Link to="/register" className="signup-btn">
            SignUp{" "}
          </Link>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Menu;
