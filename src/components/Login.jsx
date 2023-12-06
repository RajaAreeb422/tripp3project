
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import { BsShieldLock } from "react-icons/bs";
import {  BsFillPeopleFill} from "react-icons/bs";
import {  useNavigate } from "react-router-dom";

const Login = () => {


  const navigat = useNavigate();
  const logintodashboard =() =>{
console.log(localStorage);
    localStorage.setItem("id" , "abc");
    navigat("/dashboard");
    window.location.reload();
  
  }
  
  return (
    <div>
      <section className="loginpagee">
        <div className="container">
          <div className="row  login-outer-box-one">
            <div className="col-lg-8  login-inner-box-one">
              
              <div className="login-outer-box-two ">
              
                <div className="inner-box ">
                  <h3 className="emp-heading">Login to iTribe</h3>

                  <div className="samebox-login  ">
                    
                  </div>
                  <Form>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                      <Form.Label>Email address</Form.Label>
                      <InputGroup className="outer-inputss mb-3">
                        <div className="serach-icons">
                          <BsFillPeopleFill className="f-icpons" />
                        </div>
                        <Form.Control
                          type="email"
                          placeholder="Enter E-Mail"
                          name="email"
                          className="shadow-none"
                      
                        />
                      </InputGroup>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                      <Form.Label>Password</Form.Label>

                      <InputGroup className="outer-inputss  mb-3">
                        <div className="serach-icons">
                          <BsShieldLock className="f-icpons" />
                        </div>
                        <Form.Control
                          type="password"
                          placeholder="Password"
                          name="password"
                          className="shadow-none"
                          
                        />
                      </InputGroup>
                    </Form.Group>
                    <div className="text-center my-3">

                        <button className="loginbtns"  onClick={ ()=> logintodashboard()}> Login</button>
                     
                    </div>

                    <div className="text-center">
                      <a href="/signup" className="accountcreate">
                        Create Free Account Now !
                      </a>
                    </div>

                    <div className="samebox-login">
                      <p> Not Yet Registered</p>
                      
                    </div>
                  </Form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
export default Login;
