import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import { useState } from "react";
import { Password } from "@mui/icons-material";

export const useRegister = () => {
  const { register } = useAuth();
  const navigate = useNavigate();

  const [error, setError] = useState("");
  const [msgSucess, setMsgSucess] = useState("");
  const [touched, setTouched] = useState({});
  
  const [form, setForm] = useState({
    name: "",
    email: "",
    confirmEmail: "",
    password: "",
  });
};
