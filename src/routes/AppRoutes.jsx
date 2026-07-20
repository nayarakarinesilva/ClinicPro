import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Login from "../components/Login/Login";
import Register from "../components/Register/Register";
import { PrivateRoute } from "./PrivateRoute";
import Layout from "../components/Layout/Layout";
import Dashboard from "../pages/Dashboard/Dashboard";
import Patients from "../pages/Patients/Patients";
import Doctors from "../pages/Doctors/Doctors";
import Consultations from "../pages/Consultations/Consultations";

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
