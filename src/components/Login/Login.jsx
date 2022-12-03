import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Table from "react-bootstrap/Table";
import React, { useContext, useState } from "react";
import AuthContext from "../../context/AuthProvider";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const { setLogin, setUserLogin } = useContext(AuthContext);
  const navigate = useNavigate();
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const { email, password } = user;

  const handleChange = ({ target }) => {
    const { value, name } = target;
    setUser({ ...user, [name]: value });
  };

  const postLogin = async () => {
    const data = user;

    try {
      const response = await fetch(
        `${process.env.REACT_APP_URL_BASE}/api/login`,
        {
          method: "POST",
          headers: { "Content-type": "application/json" },
          body: JSON.stringify(data),
        }
      );
      const resp = await response.json();

      if (resp.ok) {
        localStorage.setItem("token", resp.token);
        setLogin(true);
        setUserLogin({ id: resp.id, name: resp.name });
        navigate("/");
      } else {
        alert("usuario o contraseña incorrecto");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleLogin = (e) => {
    e.preventDefault();
    if (email.length == 0 && password.length == 0) {
      return alert("Ingrese el correo o la contraseña");
    }
    postLogin();
    setUser({
      email: "",
      password: "",
    });
  };

  return (
    <div>
      <section className="form-register">
        <h4 className="login-title">LOG IN.</h4>
        <p className="login-details">
          Log in with your details below to view your order
        </p>
        <form action="" onSubmit={handleLogin}>
          <input
            className="controls"
            type="email"
            name="email"
            value={email}
            onChange={handleChange}
            id="nombres"
            placeholder="Email"
          />

          <input
            className="controls"
            type="password"
            name="password"
            value={password}
            onChange={handleChange}
            id="nombres"
            placeholder="Password"
          />

          <input className="botons" type="submit" value="LOGIN" />
          <p className="forge">
            {" "}
            <a href="#">Forget your password? </a>{" "}
          </p>

          <p className="donthave">Dont have an account?</p>

          {/* <input  href='checkout' className='botons' type='submit' value='SIGN UP'/> */}
          <Button
            className="boton-signup"
            variant="outline-sucess"
            href="crear"
          >
            SIGN UP
          </Button>
        </form>
      </section>
    </div>
  );
};

export default Login;
