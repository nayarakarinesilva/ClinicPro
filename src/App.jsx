import { Box, ThemeProvider } from "@mui/material";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Dashboard/Dashboard";
import Menu from "./components/Menu";
import Sidebar from "./components/sidebar/Sidebar";
import Patients from "./pages/Patients/Patients";
import Doctors from "./pages/Doctors/Doctors";
import Consultations from "./pages/Consultations/Consultations";
import { theme } from "./theme/theme";
import { AuthProvider } from "./context/AuthContext";
import { PrivateRoute } from "./routes/PrivateRoute";
import Login from "./components/Login/Login";
import Layout from "./components/Layout/Layout";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <AuthProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/login" element={<Login />} />

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
        </BrowserRouter>
      </AuthProvider>
    </ThemeProvider>
  );
};

export default App;
