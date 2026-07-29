import { formatFullDate } from "@/helpers/dateHelper";
import { Avatar, Box, Button } from "@mui/material";
import Link from "next/link";

export default function HeaderDashboard() {
  const today = formatFullDate();

  console.log(today);

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-end",
        gap: 2,
        borderBottom: "1px solid",
        borderColor: "divider",
      }}
    >
      {today}
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Avatar sx={{  bgcolor: "green" }}>N</Avatar>
        Nayara
      </Box>
      <Button>
        <Link href={"/login"}>Sair</Link>
      </Button>
    </Box>
  );
}
