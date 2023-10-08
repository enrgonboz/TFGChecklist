'use client'

import React, { useEffect, useState } from 'react';
import {
  Typography,
  List,
  ListItem,
  ListItemText,
  Checkbox,
  TextField,
  Button,
  Collapse,
  Avatar,
  Grid,
} from '@mui/material';
import './style.css'
import { ChecklistDataMockup, TaskDataMockup } from '@/app/types/mockupsInterfaces';
import { ThemeProvider } from '@mui/material/styles'; // Correct import for MUI v5
import { createTheme } from "@mui/material";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import AddIcon from '@mui/icons-material/Add';
import { deepOrange } from '@mui/material/colors';
import { useChecklistView, useDispatchChecklist } from '../context';
import Fab from '@mui/material/Fab';
import ShareIcon from '@mui/icons-material/Share';

const Theme = createTheme({
  palette: {
    primary: {
      main: "#1A0497",
    },
    secondary: {
      main: "#78C0E0",
    },
    info: {
      main: "#FFFBDB",
    },
    warning: {
      main: "#FFEC51",
    },
    error: {
      main: "#FF674D",
    },
  },
});

const checklistDefault = [
  {
    Id: 1,
    Name: "Lista de la compra",
    Description: "Mi lista de la compra septiembre",
    Tasks: [
      {
        Id: 1,
        Name: "Comprar pan",
        Description: "Comprar pan en la panadería de la esquina",
        Completed: false,
      },
      {
        Id: 2,
        Name: "Comprar leche",
        Description: "Comprar leche en el supermercado",
        Completed: false,
      },
      {
        Id: 3,
        Name: "Comprar huevos",
        Description: "Comprar huevos en la tienda de la esquina",
        Completed: false,
      },
    ],
    Users: [
      {
        Id: 1,
        Email: "juan@email.com",
      },
    ],
  },
  {
    Id: 2,
    Name: "Proyecto de Diseño de Interfaz de Usuario",
    Description: "Gestión de tareas para el proyecto de diseño de interfaz de usuario",
    Tasks: [
      {
        Id: 4,
        Name: "Investigación de mercado",
        Description: "Realizar investigación de mercado para identificar tendencias",
        Completed: false
      },
      {
        Id: 5,
        Name: "Diseño de wireframes",
        Description: "Crear wireframes de las pantallas principales",
        Completed: false
      },
      {
        Id: 6,
        Name: "Pruebas de usabilidad",
        Description: "Realizar pruebas de usabilidad con usuarios reales",
        Completed: false
      },
      {
        Id: 7,
        Name: "Diseño de alta fidelidad",
        Description: "Crear diseños de alta fidelidad basados en los wireframes",
        Completed: false
      }
    ],
    Users: [
      {
        Id: 1,
        Email: "juan@email.com"
      },
      {
        Id: 2,
        Email: "carlos@email.com"
      }
    ]
  },
  {
    Id: 3,
    Name: "Libros",
    Description: "Libros",
    Tasks: [
      {
        Id: 8,
        Name: "Libro 1",
        Description: "",
        Completed: false
      },
      {
        Id: 9,
        Name: "Libro 2",
        Description: "",
        Completed: false
      },
      {
        Id: 10,
        Name: "Libro 3",
        Description: "",
        Completed: false
      },
      {
        Id: 11,
        Name: "Libro 4",
        Description: "",
        Completed: false
      }
    ],
    Users: [
      {
        Id: 3,
        Email: "juan@email.com"
      }
    ]
  },
  {
    Id: 4,
    Name: "Pelis",
    Description: "Pelis",
    Tasks: [
      {
        Id: 12,
        Name: "POKEMON 1",
        Description: "",
        Completed: false
      },
      {
        Id: 13,
        Name: "POKEMON 2",
        Description: "",
        Completed: false
      },
      {
        Id: 14,
        Name: "POKEMON 3",
        Description: "",
        Completed: false
      },
      {
        Id: 15,
        Name: "POKEMON 4",
        Description: "",
        Completed: false
      }
    ],
    Users: [
      {
        Id: 3,
        Email: "juan@email.com"
      }
    ]
  },
  {
    Id: 5,
    Name: "Pelis",
    Description: "Pelis",
    Tasks: [
      {
        Id: 32,
        Name: "POKEMON 10",
        Description: "",
        Completed: false
      },
      {
        Id: 33,
        Name: "POKEMON 20",
        Description: "",
        Completed: false
      },
      {
        Id: 34,
        Name: "POKEMON 30",
        Description: "",
        Completed: false
      },
      {
        Id: 35,
        Name: "POKEMON 40",
        Description: "",
        Completed: false
      }
    ],
    Users: [
      {
        Id: 3,
        Email: "juan@email.com"
      }
    ]
  },
  {
    Id: 6,
    Name: "Pelis",
    Description: "Pelis",
    Tasks: [
      {
        Id: 42,
        Name: "POKEMON 15",
        Description: "",
        Completed: false
      },
      {
        Id: 43,
        Name: "POKEMON 25",
        Description: "",
        Completed: false
      },
      {
        Id: 44,
        Name: "POKEMON 35",
        Description: "",
        Completed: false
      },
      {
        Id: 45,
        Name: "POKEMON 45",
        Description: "",
        Completed: false
      }
    ],
    Users: [
      {
        Id: 3,
        Email: "juan@email.com"
      }
    ]
  },
  {
    Id: 7,
    Name: "Pelis",
    Description: "Pelis",
    Tasks: [
      {
        Id: 52,
        Name: "POKEMON 16",
        Description: "",
        Completed: false
      },
      {
        Id: 53,
        Name: "POKEMON 26",
        Description: "",
        Completed: false
      },
      {
        Id: 54,
        Name: "POKEMON 36",
        Description: "",
        Completed: false
      },
      {
        Id: 55,
        Name: "POKEMON 46",
        Description: "",
        Completed: false
      }
    ],
    Users: [
      {
        Id: 3,
        Email: "juan@email.com"
      }
    ]
  },
  {
    Id: 8,
    Name: "Pelis",
    Description: "Pelis",
    Tasks: [
      {
        Id: 62,
        Name: "POKEMON 17",
        Description: "",
        Completed: false
      },
      {
        Id: 63,
        Name: "POKEMON 27",
        Description: "",
        Completed: false
      },
      {
        Id: 64,
        Name: "POKEMON 37",
        Description: "",
        Completed: false
      },
      {
        Id: 65,
        Name: "POKEMON 47",
        Description: "",
        Completed: false
      }
    ],
    Users: [
      {
        Id: 3,
        Email: "luisval@gmail.com"
      }
    ],
  },
  {
    Id: 9,
    Name: "Pelis",
    Description: "Pelis",
    Tasks: [
      {
        Id: 72,
        Name: "POKEMON 18",
        Description: "",
        Completed: false
      },
      {
        Id: 73,
        Name: "POKEMON 28",
        Description: "",
        Completed: false
      },
      {
        Id: 74,
        Name: "POKEMON 38",
        Description: "",
        Completed: false
      },
      {
        Id: 75,
        Name: "POKEMON 48",
        Description: "",
        Completed: false
      }
    ],
    Users: [
      {
        Id: 3,
        Email: "luisval@gmail.com"
      }
    ],
  },
  {
    Id: 10,
    Name: "Pelis",
    Description: "Pelis",
    Tasks: [
      {
        Id: 82,
        Name: "POKEMON 19",
        Description: "",
        Completed: false
      },
      {
        Id: 83,
        Name: "POKEMON 29",
        Description: "",
        Completed: false
      },
      {
        Id: 84,
        Name: "POKEMON 39",
        Description: "",
        Completed: false
      },
      {
        Id: 85,
        Name: "POKEMON 49",
        Description: "",
        Completed: false
      }
    ],
    Users: [
      {
        Id: 3,
        Email: "lui@gmcl.com"
      }
    ],
  },
  {
    Id: 11,
    Name: "Pelis",
    Description: "Pelis",
    Tasks: [
      {
        Id: 92,
        Name: "POKEMON 110",
        Description: "",
        Completed: false
      },
      {
        Id: 93,
        Name: "POKEMON 210",
        Description: "",
        Completed: false
      },
      {
        Id: 94,
        Name: "POKEMON 310",
        Description: "",
        Completed: false
      },
      {
        Id: 95,
        Name: "POKEMON 410",
        Description: "",
        Completed: false
      }
    ],
    Users: [
      {
        Id: 3,
        Email: "luivla@gmail.com"
      }
    ],
  },
  {
    Id: 12,
    Name: "Pelis",
    Description: "Pelis",
    Tasks: [
      {
        Id: 102,
        Name: "POKEMON 120",
        Description: "",
        Completed: false
      },
      {
        Id: 103,
        Name: "POKEMON 220",
        Description: "",
        Completed: false
      },
      {
        Id: 104,
        Name: "POKEMON 320",
        Description: "",
        Completed: false
      },
      {
        Id: 105,
        Name: "POKEMON 420",
        Description: "",
        Completed: false
      }
    ],
    Users: [
      {
        Id: 3,
        Email: "luisval@gmail.com"
      }
    ],
  },
  {
    Id: 13,
    Name: "Pelis",
    Description: "Pelis",
    Tasks: [
      {
        Id: 112,
        Name: "POKEMON 130",
        Description: "",
        Completed: false
      },
      {
        Id: 113,
        Name: "POKEMON 230",
        Description: "",
        Completed: false
      },
      {
        Id: 114,
        Name: "POKEMON 330",
        Description: "",
        Completed: false
      },
      {
        Id: 115,
        Name: "POKEMON 430",
        Description: "",
        Completed: false
      }
    ],
    Users: [
      {
        Id: 3,
        Email: "luisvla@gmail.com"
      },
    ],
  },
]

const ChecklistView = () => {
  const { checklists: checklistProv } = useChecklistView();
  const checklists = checklistProv !== undefined ? checklistProv : checklistDefault;
  const { dispatchToggleTask, dispatchAddTask } = useDispatchChecklist();
  const queryParameters = new URLSearchParams(window.location.search);
  const idFromQuery = queryParameters.get('id');
  const checklist = checklists.find((checklist) => checklist.Id === Number(idFromQuery))!;
  const [newTaskName, setNewTaskName] = useState('');
  const [completedTasksOpen, setCompletedTasksOpen] = useState(false);

  // Extract the 'id' query parameter from the URL

  const handleNewTaskNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNewTaskName(event.target.value);
  };

  const addNewTask = () => {
    if (newTaskName === '') {
      return;
    }

    const newTaskId = Math.max(...checklist.Tasks.map((task) => task.Id)) + 1;
    dispatchAddTask(checklist.Id, { Id: newTaskId, Name: newTaskName, Completed: false } as TaskDataMockup)
    setNewTaskName('');
  }

  const toggleCompletedTasksCollapse = () => {
    setCompletedTasksOpen(!completedTasksOpen);
  };

  return (
    <ThemeProvider theme={Theme}>
      <div className="full-height-container">
        <div className='list-container'>
          <Grid sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <Grid item xs={1}>
              <ArrowBackIcon color='primary' onClick={() => window.location.href = '/home'} />
            </Grid>
            <Grid item>
              <Typography variant="h6">{checklist.Name}</Typography>
            </Grid>
            <Grid item xs={1}>
              <Fab
                color="error"
                size='small'
              >
                <ShareIcon color='info' />
              </Fab>
            </Grid>
          </Grid>
          <List>
            {checklist.Tasks.filter((task) => !task.Completed).map((task) => (
              <ListItem key={task.Id} dense>
                <Checkbox
                  checked={task.Completed}
                  onChange={() => dispatchToggleTask(checklist.Id, task.Id)}
                />
                <ListItemText primary={task.Name} />
              </ListItem>
            ))}
          </List>

          {/* Button to toggle the completed tasks collapse */}
          <Typography color="primary" onClick={toggleCompletedTasksCollapse}>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <span>Completadas</span>
              {completedTasksOpen ? (
                <ExpandLessIcon color='primary' />
              ) : (
                <ExpandMoreIcon color='primary' />
              )}
            </div>
          </Typography>

          {/* Completed tasks in a Collapse component */}
          <Collapse in={completedTasksOpen}>
            <List>
              {checklist.Tasks.filter((task) => task.Completed).map((task) =>
                task.Completed ? (
                  <ListItem key={task.Id} dense>
                    <Checkbox
                      checked={task.Completed}
                      onChange={() => dispatchToggleTask(checklist.Id, task.Id)}
                    />
                    <ListItemText primary={task.Name} />
                  </ListItem>
                ) : null
              )}
            </List>
          </Collapse>
        </div>

        {/* New task input field */}
        <div className="new-task-container">
          <TextField
            label="Nueva tarea"
            variant="standard"
            value={newTaskName}
            onChange={handleNewTaskNameChange}
            className='new-task-input'
          />

          {/* Button to add a new task */}
          <Button variant="contained" color="primary" onClick={addNewTask} className='new-task-button'>
            <AddIcon />
          </Button>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default ChecklistView;