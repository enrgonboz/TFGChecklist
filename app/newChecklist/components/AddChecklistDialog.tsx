"use client"

import React, { useState } from 'react';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  Button,
} from '@mui/material';
import { AddChecklistDialogProps } from '@/app/types/Interfaces';
import axios from 'axios'; // Import Axios
import { ChecklistProvider, useChecklistContext } from '../../context/ChecklistProvider'; // Import the context hook

const AddChecklistDialog: React.FC<AddChecklistDialogProps> = ({
  open,
  onClose,
}) => {
  const [newChecklistTitle, setNewChecklistTitle] = useState('');
  const { refreshChecklists } = useChecklistContext(); // Access the refresh function from the context


  const handleClose = () => {
    setNewChecklistTitle('');
    onClose();
  };

  const handleAddChecklist = async () => {
    const jwtToken = localStorage.getItem('token');

    if (jwtToken) {
    try {
      //const response = await axios.post('http://localhost:1337/api/checklists', {
        const response = await axios.post('https://installing-strengths-metadata-turn.trycloudflare.com/api/checklists', {
        "data": {
                Title: newChecklistTitle,
                Shared: false
              }, 
              },{
                headers: {
                    'Authorization': `Bearer ${jwtToken}`,
                },
              }
        );
      if (response.status === 200) {
        refreshChecklists(); // Call the refresh function
      } else {
        console.error('Failed to create checklist');
      }
    } catch (error) {
      console.error('Error creating checklist:', error);
    }
    }
    
    setNewChecklistTitle('');
    onClose();
  };
  

  return (
    <ChecklistProvider>
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle>Add New Checklist</DialogTitle>
      <DialogContent>
        <TextField
          autoFocus
          margin="dense"
          label="Title"
          fullWidth
          value={newChecklistTitle}
          onChange={(e) => setNewChecklistTitle(e.target.value)}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} color="primary">
          Cancel
        </Button>
        <Button onClick={handleAddChecklist} color="primary">
          Add
        </Button>
      </DialogActions>
    </Dialog>
    </ChecklistProvider>
  );
};

export default AddChecklistDialog;
