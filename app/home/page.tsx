"use client"
import { useEffect, useState } from "react";
import AddChecklistDialog from "../newChecklist/components/AddChecklistDialog";
import { Box, Fab } from "@mui/material";
import AddIcon from '@mui/icons-material/Add';
import "./style.css";
import { ChecklistTabs } from "./components/Tabs";
import { ThemeProvider } from '@mui/material/styles'; // Correct import for MUI v5
import { createTheme } from "@mui/material";
import { ChecklistProvider, useChecklistView, useDispatchChecklist } from "../checklist/context";

const Theme = createTheme({
  palette: {
    primary: {
      main: "#1A0497",
    },
  },
});
export default function Home() {
  const [isDialogOpen, setDialogOpen] = useState(false);
  const { checklists } = useChecklistView();
  const { initializeState } = useDispatchChecklist();
  
  useEffect(() => {
    initializeState();
  }, []);

  const openDialog = () => {
    setDialogOpen(true);
  };

  const closeDialog = () => {
    setDialogOpen(false);
  };

  const handleAddChecklist = () => {
    
    closeDialog();
  };


  return (
      <ThemeProvider theme={Theme}>
        <Box className="home">
          <ChecklistTabs />
          <Fab color="primary" onClick={openDialog} style={{ position: 'fixed', bottom: '1.5rem', right: '0.5rem' }}>
            <AddIcon />
          </Fab>
          <AddChecklistDialog 
            open={isDialogOpen}
            onClose={closeDialog}
            onAddChecklist={handleAddChecklist}
          />
        </Box>
      </ThemeProvider>
  );
}