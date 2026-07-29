import { formatFullDate } from "@/helpers/dateHelper";
import { Avatar, Box, Button } from "@mui/material";
import Link from "next/link";

export default function HeaderDashboard() {
  const today = formatFullDate();

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-end",
        gap: 2,
        borderBottom: "1px solid",
        borderColor: "divider",
        padding: 1,
      }}
    >
      {today}
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: 1,
          borderLeft: "1px solid",
          borderColor: "divider",
          padding: 1,
        }}
      >
        Nayara
        <Avatar sx={{ bgcolor: "primary.main" }}>NK</Avatar>
      </Box>
      <Button>
        <Link href={"/login"}>Sair</Link>
      </Button>
    </Box>
  );
}
