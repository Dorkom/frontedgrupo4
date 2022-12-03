import { useEffect } from "react";
import { createContext, useState } from "react";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [login, setLogin] = useState(false);
  const [token, setToken] = useState();
  const [userLogin, setUserLogin] = useState(
    localStorage.getItem("userId")
      ? JSON.parse(localStorage.getItem("userId"))
      : []
  );

  useEffect(() => {
    if (login) {
      const tokenStorage = localStorage.getItem("token");
      setToken(tokenStorage);
      postVerify(tokenStorage);
    }
  }, [login]);

  useEffect(() => {
    if (token) {
      postVerify(token);
    }
  }, [token]);

  const postVerify = async () => {
    const data = { token };

    try {
      const resp = await fetch(`${process.env.REACT_APP_URL_BASE}/api/verify`, {
        method: "POST",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify(data),
      });

      const resData = await resp.json();

      localStorage.setItem("userId", resData[1]);
      setUserLogin(resData);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <AuthContext.Provider
      value={{ token, setToken, login, setLogin, setUserLogin, userLogin }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export { AuthProvider };

export default AuthContext;
