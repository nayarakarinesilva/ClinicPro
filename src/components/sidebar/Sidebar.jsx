import { Box, Typography } from "@mui/material";
import SidebarItem from "./SidebarItem";
import { theme } from "../../theme/theme";
import SidebarHeader from "./SidebarHeader";

const Sidebar = () => {
  return (
    <Box>
      <SidebarHeader />
      <SidebarItem />
    </Box>
  );
};

export default Sidebar;
