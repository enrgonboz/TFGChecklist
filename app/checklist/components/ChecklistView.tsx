'use client'

import React, { useState } from 'react';
import {
  Typography,
  List,
  ListItem,
  ListItemText,
  Checkbox,
  TextField,
  Button,
} from '@mui/material';
import './style.css'
import { ChecklistDataMockup } from '@/app/types/mockupsInterfaces';

const ChecklistView = (
  { checklist } : { checklist: ChecklistDataMockup },
) => {
  const [completedTasks, setCompletedTasks] = useState<number[]>([]);
  const [newTaskName, setNewTaskName] = useState('');
  const queryParameters = new URLSearchParams(window.location.search)

    // Extract the 'id' query parameter from the URL
    const idFromQuery = queryParameters.get('id');

  const handleTaskToggle = (taskId: number) => {
    if (completedTasks.includes(taskId)) {
      // If the task is already completed, unmark it
      setCompletedTasks(completedTasks.filter((id) => id !== taskId));
    } else {
      // If the task is not completed, mark it as completed
      setCompletedTasks([...completedTasks, taskId]);
    }
  };

  const handleNewTaskNameChange = (event : React.ChangeEvent<HTMLInputElement>) => {
    setNewTaskName(event.target.value);
  };

  const addNewTask = () => {
    if (newTaskName === '') {
      return;
    }

    const newTaskId = Math.max(...checklist.Tasks.map((task) => task.Id)) + 1;
    const newTask = {
      Id: newTaskId,
      Name: newTaskName,
      Description: '',
      Completed: false,
    };

    checklist.Tasks.push(newTask);
    setNewTaskName('');
  }

  return (
    <div>
        <div>
          <Typography variant="h6">{checklist.Name}</Typography>
          <List>
          {Array.isArray(checklist.Tasks) &&
            checklist.Tasks.map((task) => (
              <ListItem key={task.Id} dense>
                <Checkbox
                  checked={completedTasks.includes(task.Id)}
                  onChange={() => handleTaskToggle(task.Id)}
                />
                <ListItemText primary={task.Name} />
              </ListItem>
            ))}
          </List>
  
          {/* New task input field */}
          <div className="new-task-container">
          <TextField
            label="New Task"
            variant="outlined"
            value={newTaskName}
            onChange={handleNewTaskNameChange}
          />
  
          {/* Button to add a new task */}
          <Button variant="contained" color="primary" onClick={addNewTask}>
            Add Task
          </Button>
          </div>
        </div>
    </div>
  );
};

export default ChecklistView;