import { createContext, useContext, useEffect, useState } from "react";

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const userToken = localStorage.getItem("user_token");
    const userStorage = localStorage.getItem("user_db");

    if (userToken && userStorage) {
      const hasUser = JSON.parse(userStorage)?.filter(
        (user) => user.email === JSON.parse(userToken).email,
      );

      //Se for o mesmo email do token vai setar o usuário
      if (hasUser?.length) {
        setUser(hasUser[0]);
      }
    }
  }, []);

  const login = (email, password) => {
    const userStorage = JSON.parse(localStorage.getItem("user_db")) || [];
    
    const hasUser = userStorage?.filter((user) => user.email === email);

    if (!hasUser?.length) {
      return { success: false, message: "Usuário não cadastrado" };
    }

    if (hasUser?.password !== password) {
      return { success: false, message: "E-mail ou senha incorretos" };
    }

    const token = Math.random().toString(36).substring(2);

    localStorage.setItem("user_token", JSON.stringify({ email, token }));

    setUser(hasUser[0]);

    return { success: true };
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("user_token");
  };

  const register = (email, password, name) => {
    const userStorage = JSON.parse(localStorage.getItem("user_db")) || [];

    const hasUser = userStorage?.filter((user) => user.email === email);

    if (hasUser?.length) {
      return "Já tem uma conta com esse e-mail cadastrada.";
    }

    let newUser;

    if (userStorage) {
      newUser = [...userStorage, { email, password, name }];
    } else {
      newUser = [{ email, password, name }];
    }

    localStorage.setItem("userdb", JSON.stringify(newUser));
    return;
  };

  return (
    <AuthContext.Provider
      value={{ user, signed: !!user, login, register, logout }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
