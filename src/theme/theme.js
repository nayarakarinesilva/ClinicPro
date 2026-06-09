import { createTheme } from "@mui/material";

export const theme = createTheme({
  palette: {
    primary: {
      main: "#004ac6",
    },
    text: {
      primary: "#0D1C2F",
      secondary: "#434655",
      muted: "#737686",
      disabled: "#6B7280",
    },
    background: {
      default: "#FFFFFF",
      paper: "#F8F9FF",
      primary: "#D5E4F8",
      secondary: "#FFDBCD",
      muted: "#516070",
      active: "#DCFCE7",
    },
    border: {
      light: "#C3C6D7",
    },
    icon: {
      primary: "#004AC6",
      secondary: "#7D2D00",
      muted: "#9CA3AF",
      active: "#15803D",
    },
    statusBackground: {
      success: "#DCFCE7",
      error: "#FFDAD6",
      warning: "#FEF9C3",
      info: "#DBEAFE",
    },
    status: {
      success: "#15803D",
      error: "#93000A",
      warning: "#A16207",
      info: "#1D4ED8",
    },
  },
});
