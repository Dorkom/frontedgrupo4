import React, { useEffect, useState } from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import AuthContext from "../../context/AuthProvider";
import Col from "react-bootstrap/Col";
import Nav from "react-bootstrap/Nav";
import Row from "react-bootstrap/Row";
import Tab from "react-bootstrap/Tab";
import { useNavigate } from "react-router-dom";

const Perfil = () => {
  const { token, userLogin, setLogin } = useContext(AuthContext);
  const navigate = useNavigate();

  const id = localStorage.getItem("userId");
  const [userInfo, setUserInfo] = useState({
    name: "",
    lastName: "",
    phone: "",
    address: "",
    city: "",
    country: "",
    cp: "",
    email: "",
  });

  const [orders, setOrders] = useState([]);

  const getData = async () => {
    try {
      const data = await fetch(
        `${process.env.REACT_APP_URL_BASE}/api/user/${id}`
      );
      const dataResponse = await data.json();
      setUserInfo(dataResponse);
    } catch (error) {
      console.log(error);
    }
  };

  const getOrders = async (id) => {
    try {
      const data = await fetch(
        `${process.env.REACT_APP_URL_BASE}/api/order/${id}`
      );
      const dataResponse = await data.json();
      if (dataResponse) {
        setOrders(dataResponse);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleChange = ({ target }) => {
    const { value, name } = target;
    setUserInfo({ ...userInfo, [name]: value });
  };

  const postUpdateUser = async () => {
    const data = {
      name: userInfo.name,
      lastName: userInfo.lastName,
      phone: userInfo.phone,
      address: userInfo.address,
      city: userInfo.city,
      country: userInfo.country,
      cp: userInfo.cp,
      email: userInfo.email,
    };
    try {
      const resp = await fetch(
        `${process.env.REACT_APP_URL_BASE}/api/user/${id}`,
        {
          method: "PUT",
          headers: { "Content-type": "application/json" },
          body: JSON.stringify(data),
        }
      );
      const respData = await resp.json();
      setOrders(respData);
    } catch (error) {
      console.log(error);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    postUpdateUser();
  };

  const handleClick = () => {
    localStorage.clear();
    setLogin(false);
    navigate("/login");
  };

  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    if (id) {
      getOrders(id);
    }
  }, [id]);

  const formatDate = (date) => {
    const newDate = new Date(date);
    return newDate.toLocaleDateString();
  };

  return (
    <Tab.Container id="left-tabs-example" defaultActiveKey="first">
      <Row>
        <Col sm={3}>
          <Nav variant="pills" className="flex-column">
            <Nav.Item>
              <Nav.Link eventKey="first" className="text-white">
                History
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="second" className="text-white">
                Profile Info
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link
                eventKey="third"
                className="text-danger  uppercase fs-6 text-uppercase"
                style={{ fontWeight: "900" }}
                onClick={handleClick}
              >
                Log Out
              </Nav.Link>
            </Nav.Item>
          </Nav>
        </Col>
        <Col sm={9}>
          <Tab.Content>
            <Tab.Pane eventKey="first">
              <div
                className="rounded-4 p-4"
                style={{ overflowY: "scroll", height: "85vh" }}
              >
                <div class="container-perfil text-dark">
                  {orders.length !== 0 ? (
                    orders.map((product) => (
                      <div
                        className={`w-100 d-flex  align-items-center justify-content-around bg-white py-2 rounded-2`}
                      >
                        <img
                          src={product.url}
                          alt=""
                          style={{ width: "60px", height: "60px" }}
                        />
                        <div className=" w-100 d-flex justify-content-evenly text-left  px-3 rounded-2">
                          <p>
                            {" "}
                            <b>{product.name}</b>{" "}
                          </p>

                          <p>${product.price}</p>
                          <p>{formatDate(product.updatedAt)}</p>
                        </div>
                      </div>
                    ))
                  ) : (
                    <h3 className="text-center">No hay ordenes</h3>
                  )}
                </div>
              </div>
            </Tab.Pane>
            <Tab.Pane eventKey="second">
              <div>
                <div class="container-perfil">
                  <form action="" onSubmit={handleSubmit}>
                    <div class="megarow">
                      <div class="row2">
                        <div class="col-25">
                          <label for="fname">First Name</label>
                        </div>
                        <div class="col-75">
                          <input
                            className="input-perfil"
                            type="text"
                            id="fname"
                            name="name"
                            value={userInfo.name}
                            onChange={handleChange}
                          />
                        </div>
                      </div>
                      <div class="row2">
                        <div class="col-25">
                          <label for="lname">Last Name</label>
                        </div>
                        <div class="col-75">
                          <input
                            className="input-perfil"
                            type="text"
                            id="lname"
                            name="lastName"
                            value={userInfo.lastName}
                            onChange={handleChange}
                          />
                        </div>
                      </div>
                    </div>
                    <div class="row">
                      <div class="col-7">
                        <label for="lEmail">Email</label>
                      </div>
                      <div class="col-75">
                        <input
                          className="input-perfil"
                          type="text"
                          id="lEmail"
                          name="email"
                          value={userInfo.email}
                          onChange={handleChange}
                        />
                      </div>
                    </div>
                    <div class="row">
                      <div class="col-7">
                        <label for="lAddress">Address</label>
                      </div>
                      <div class="col-75">
                        <input
                          className="input-perfil"
                          type="text"
                          id="lAddress"
                          name="address"
                          value={userInfo.address}
                          onChange={handleChange}
                        />
                      </div>
                    </div>

                    <div class="megarow">
                      <div class="row2">
                        <div class="col-25">
                          <label for="country">Country</label>
                        </div>
                        <div class="col-75">
                          <select
                            id="country"
                            name="country"
                            value={userInfo.country}
                            onChange={handleChange}
                          >
                            <option value={null}>{`<-- Seleccione -->`}</option>
                            <option value="Peru">Peru</option>
                            <option value="Colombia">Colombia</option>
                            <option value="Chile">Chile</option>
                          </select>
                        </div>
                      </div>
                      <div class="row2">
                        <div class="col-25">
                          <label for="lzip">Zip Code</label>
                        </div>
                        <div class="col-75">
                          <input
                            className="input-perfil"
                            type="text"
                            id="lzip"
                            name="cp"
                            value={userInfo.cp}
                            onChange={handleChange}
                          />
                        </div>
                      </div>
                    </div>
                    <div class="row">
                      <div class="col-25">
                        <label for="lphonr">Ciudad</label>
                      </div>
                      <div class="col-25">
                        <input
                          className="input-perfil"
                          type="text"
                          id="lphone"
                          name="city"
                          value={userInfo.city}
                          onChange={handleChange}
                        />
                      </div>
                      <div class="col-25">
                        <label for="lphonr">Telephone</label>
                      </div>
                      <div class="col-25">
                        <input
                          className="input-perfil"
                          type="text"
                          id="lphone"
                          name="phone"
                          value={userInfo.phone}
                          onChange={handleChange}
                        />
                      </div>
                    </div>
                    <button className="boton-update" href="#">
                      Update Info
                    </button>

                    <button className="boton-cancel" href="Perfil">
                      <Link to="/" className=" text-reset">
                        Cancel
                      </Link>
                    </button>
                  </form>
                </div>
              </div>
            </Tab.Pane>
          </Tab.Content>
        </Col>
      </Row>
    </Tab.Container>
  );
};
export default Perfil;
