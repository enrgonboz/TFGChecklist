"use client";
import Login from "./login/page";
import { ThemeProvider } from '@mui/material/styles'; // Correct import for MUI v5
import { createTheme } from "@mui/material";

const Theme = createTheme({
  palette: {
    primary: {
      main: "#1A0497",
    },
  },
});

export default function Home() {
    return (
      <ThemeProvider theme={Theme}>
     <div className="container">
       <Login />
     </div>
     </ThemeProvider>
   );
 }