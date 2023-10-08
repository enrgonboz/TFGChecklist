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
import { useChecklistView, useDispatchChecklist } from '@/app/checklist/context';

const AddChecklistDialog: React.FC<AddChecklistDialogProps> = ({
  open,
  onClose,
}) => {
  const [newChecklistTitle, setNewChecklistTitle] = useState('');
  const { checklists } = useChecklistView();
  const { dispatchAddChecklist } = useDispatchChecklist();

  const handleClose = () => {
    setNewChecklistTitle('');
    onClose();
  };

  const handleAddChecklist = () => {
    if (newChecklistTitle === '') {
      return;
    } else {
      console.log(checklists);
      const newChecklistId = Math.max(...checklists.map((ch) => ch.Id)) + 1;
      dispatchAddChecklist({ Id: newChecklistId, Name: newChecklistTitle, Description: '', Tasks: [], Users: [] })
      setNewChecklistTitle('');
    }
    onClose();
  };
  

  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle>Nueva Checklist</DialogTitle>
      <DialogContent>
        <TextField
          autoFocus
          margin="dense"
          label="Título"
          fullWidth
          value={newChecklistTitle}
          onChange={(e) => setNewChecklistTitle(e.target.value)}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} color="primary">
          Cancelar
        </Button>
        <Button onClick={handleAddChecklist} color="primary">
          Añadir
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default AddChecklistDialog;
