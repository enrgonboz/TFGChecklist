"use client"
import { useState } from "react";
import AddChecklistDialog from "../newChecklist/components/AddChecklistDialog";
import AllChecklist from "./components/AllChecklist";
import { Fab } from "@mui/material";
import AddIcon from '@mui/icons-material/Add';


export default function Home() {
  const [isDialogOpen, setDialogOpen] = useState(false);

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
    <div>
      <AllChecklist />
      <Fab color="primary" onClick={openDialog} style={{ position: 'fixed', bottom: '20px', right: '20px' }}>
        <AddIcon />
      </Fab>
      <AddChecklistDialog 
        open={isDialogOpen}
        onClose={closeDialog}
        onAddChecklist={handleAddChecklist}
      />
    </div>
  );
}