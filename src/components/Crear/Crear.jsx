import React, { useState } from "react";

const Crear = () => {
  const [user, setUser] = useState({
    name: "",
    lastName: "",
    email: "",
    password: "",
  });

  const { name, lastName, email, password } = user;

  const handleChange = ({ target }) => {
    const { value, name } = target;
    setUser({ ...user, [name]: value });
    console.log(user);
  };

  const postCreatUser = async () => {
    const data = user;

    try {
      const response = await fetch(
        `${process.env.REACT_APP_URL_BASE}/api/create`,
        {
          method: "POST",
          headers: { "Content-type": "application/json" },
          body: JSON.stringify(data),
        }
      );
      const resp = await response.json();
    } catch (error) {
      console.log(error);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      email.length == 0 &&
      password.length == 0 &&
      name.length == 0 &&
      lastName.length == 0
    ) {
      return alert("Sebe llenar todos los campos");
    }
    postCreatUser();
    setUser({
      name: "",
      lastName: "",
      email: "",
      password: "",
    });
  };

  return (
    <div>
      <section className="form-register">
        <form action="" onSubmit={handleSubmit}>
          <h4>CREATE ACCOUNT</h4>
          <input
            className="controls"
            type="text"
            name="name"
            value={name}
            onChange={handleChange}
            id="nombres"
            placeholder="First Name"
          />

          <input
            className="controls"
            type="text"
            name="lastName"
            value={lastName}
            onChange={handleChange}
            id="nombres"
            placeholder="Last Name"
          />

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

          <input className="botons" type="submit" value="CREATE" />
        </form>
      </section>
    </div>
  );
};

export default Crear;
