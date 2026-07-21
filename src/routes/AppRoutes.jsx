import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { PrivateRoute } from "./PrivateRoute";
import Login from "../modules/Auth/Login/Login";
import Register from "../modules/Auth/Register/Register";
import Dashboard from "../modules/Dashboard/Dashboard";
import Patients from "../modules/Patients/Patients";
import Doctors from "../modules/Doctors/Doctors";
import Consultations from "../modules/Consultations/Consultations";
import Layout from "../shared/Layout/Layout";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />

      <Route element={<PrivateRoute />}>
        <Route element={<Layout />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/patients" element={<Patients />} />
          <Route path="/doctors" element={<Doctors />} />
          <Route path="/consultations" element={<Consultations />} />
        </Route>
      </Route>

      <Route path="/" element={<Navigate to="/dashboard" />} />
    </Routes>
  );
};

export default AppRoutes;
