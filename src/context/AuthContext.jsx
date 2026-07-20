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
    //Pega todos os usuários cadastrados no localStorage
    const userStorage = JSON.parse(localStorage.getItem("user_db")) || [];

    //Verifica se usuários já foi cadastrado
    const hasUser = userStorage.find((user) => user.email === email);

    if (!hasUser) {
      return {
        success: false,
        message: "Usuário não cadastrado",
      };
    }

    if (hasUser.password !== password) {
      return {
        success: false,
        message: "E-mail ou senha incorretos",
      };
    }

    const token = Math.random().toString(36).substring(2);

    localStorage.setItem(
      "user_token",
      JSON.stringify({
        email,
        token,
      }),
    );

    setUser(hasUser);

    return {
      success: true,
    };
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("user_token");
  };

  const register = (name, email, password) => {
    const userStorage = JSON.parse(localStorage.getItem("user_db"));

    const hasUser = userStorage?.filter((user) => user.email === email);

    if (hasUser?.length) {
      return "Já tem uma conta com esse e-mail cadastrada.";
    }
    let newUser;
    if (userStorage) {
      //Caso já tenha ele junta
      newUser = [...userStorage, { email, password, name }];
    } else {
      //Se não tiver cadastro ele salva
      newUser = [{ email, password, name }];
    }
    
    localStorage.setItem("user_db", JSON.stringify(newUser));
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
