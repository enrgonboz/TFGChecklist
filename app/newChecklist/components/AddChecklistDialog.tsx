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

const AddChecklistDialog: React.FC<AddChecklistDialogProps> = ({
  open,
  onClose,
}) => {
  const [newChecklistTitle, setNewChecklistTitle] = useState('');


  const handleClose = () => {
    setNewChecklistTitle('');
    onClose();
  };

  const handleAddChecklist = () => {
    if (newChecklistTitle === '') {
      return;
    }
  };
  

  return (
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
  );
};

export default AddChecklistDialog;
