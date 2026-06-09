import { Box, ThemeProvider } from "@mui/material";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Dashboard/Dashboard";
import Menu from "./components/Menu";
import Sidebar from "./components/sidebar/Sidebar";
import Patients from "./pages/Patients/Patients";
import Doctors from "./pages/Doctors/Doctors";
import Consultations from "./pages/Consultations/Consultations";
import { theme } from "./theme/theme";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Box sx={{ display: "grid", gridTemplateColumns: "1fr 8fr" }}>
          <Sidebar />
          <Box>
            <Routes>
              <Route path="/" element={<Navigate to="/dashboard" />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/patients" element={<Patients />} />
              <Route path="/doctors" element={<Doctors />} />
              <Route path="/consultations" element={<Consultations />} />

              <Route path="*" element={<Navigate to="/dashboard" />} />
            </Routes>
          </Box>
        </Box>
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
