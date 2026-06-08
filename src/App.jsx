import { Box } from "@mui/material";
import Dashboard from "./pages/Dashboard/Dashboard";
import Menu from "./components/Menu";
import Sidebar from "./components/sidebar/Sidebar";

const App = () => {
  return (
    <>
      <Box sx={{display:"grid", gridTemplateColumns:"2fr 8fr"}}>
        <Sidebar />
        <Dashboard />
      </Box>
    </>
  );
};

export default App;
