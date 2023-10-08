'use client'

import React, { useState, useEffect } from 'react';
import {
  Typography,
  List,
  ListItem,
  ListItemText,
  Checkbox,
  TextField,
  Button,
} from '@mui/material';
import { ChecklistApiResponse, ChecklistAttributes, ChecklistData } from '../../types/Interfaces';
import axios from 'axios';
import './style.css'

const ChecklistView: React.FC = () => {
  const [checklist, setChecklist] = useState<ChecklistData>();
  const [loading, setLoading] = useState(true); // Initialize loading as true
  const [completedTasks, setCompletedTasks] = useState<number[]>([]);
  const [newTaskName, setNewTaskName] = useState('');
  const queryParameters = new URLSearchParams(window.location.search)

    // Extract the 'id' query parameter from the URL
    const idFromQuery = queryParameters.get('id');
  
useEffect(() => {
  const fetchData = async () => {
  const jwtToken = localStorage.getItem('token'); // Replace with your actual JWT retrieval logic
  
      // Make sure you have the JWT token before making the request
      if (jwtToken && idFromQuery) {
        try {
          //const response: ChecklistApiResponse = await axios.get('http://localhost:1337/api/checklists/' + idFromQuery + '?populate=*', {
          const response: ChecklistApiResponse = await axios.get('https://installing-strengths-metadata-turn.trycloudflare.com/api/checklists/ ' + idFromQuery + '?populate=*', {
            headers: {
              Authorization: `Bearer ${jwtToken}`,
            },
          });
          const checklistData = response.data.data;
          setChecklist(checklistData);
          setLoading(false); // Set loading to false when data is successfully fetched
        } catch (error) {
          console.error('Error fetching checklists:', error);
          setLoading(false); // Set loading to false on error as well
        }
      }
    };

    fetchData();
}, [idFromQuery]);

  const addNewTask = async () => {
    const jwtToken = localStorage.getItem('token');
    console.log(newTaskName)
  
    if (jwtToken) {
      try {
        //const response = await axios.post('http://localhost:1337/api/tasks',{
          const response = await axios.post('https://installing-strengths-metadata-turn.trycloudflare.com/api/tasks',{
          data: {
            Name: newTaskName,
            checklists: idFromQuery,
            },
          },
          {
            headers: {
              Authorization: `Bearer ${jwtToken}`,
            },
          }
        );

        console.log(response)
  
        if (response.status === 200) {
          // Task created successfully, you can update the checklist or perform other actions as needed
          // For example, you can refresh the checklist data
          // Clear the new task input field
          setNewTaskName('');
        } else {
          console.error('Failed to create task');
          // Handle the error as needed
        }
      } catch (error) {
        console.log(error)
        console.error('Error creating task:', error);
        // Handle the error as needed
      }
    }
  };

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

  return (
    <div>
      {loading ? (
        <div className="spinner">Loading...</div>
      ) : (
        <div>
          <Typography variant="h6">{checklist?.attributes.Title}</Typography>
          <List>
          {Array.isArray(checklist?.attributes.tasks?.data) &&
            checklist?.attributes.tasks?.data.map((task) => (
              <ListItem key={task.id} dense>
                <Checkbox
                  checked={completedTasks.includes(task.id)}
                  onChange={() => handleTaskToggle(task.id)}
                />
                <ListItemText primary={task.attributes.Name} />
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
      )}
    </div>
  );
};

export default ChecklistView;