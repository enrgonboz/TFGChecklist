"use client"
import React, { useState } from 'react';
import {
  Box,
  Container,
  Grid,
  Typography,
} from '@mui/material';
import IndividualChecklist from './IndividualChecklist';
import { ChecklistDataMockup } from '@/app/types/mockupsInterfaces';
import { ChecklistProvider, useChecklistView } from '@/app/checklist/context';

const getChecklists = (checklist: ChecklistDataMockup[]) => {
  const leftColumn = [];
  const middleColumn = [];
  const rightColumn = [];

  for (let i = 0; i < checklist.length; i++) {
    if (i % 3 === 0) {
      leftColumn.push(checklist[i]);
    } else if (i % 3 === 1) {
      middleColumn.push(checklist[i]);
    } else {
      rightColumn.push(checklist[i]);
    }
  }

  return [leftColumn, middleColumn, rightColumn];
}

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

const AllChecklist: React.FC = () => {
  const { checklists } = useChecklistView();
  const [leftColumn, middleColumn, rightColumn] = getChecklists(checklists || checklistDefault);

  return (
      <Box sx={{ padding: '16px 0px 0px 0px' }}>
        <Grid container spacing={2} sx={{ width: '100%', marginLeft: 0 }}>
          <Grid sx={{ width: '33.33%', display: 'flex', flexDirection: 'column' }}>
            {leftColumn.map((checklist) => (
              <IndividualChecklist key={checklist.Id} Id={checklist.Id} Name={checklist.Name} Tasks={checklist.Tasks} Description={checklist.Description} Users={checklist.Users}/>
            ))
            }
          </Grid>
          <Grid sx={{ width: '33.33%', display: 'flex', flexDirection: 'column' }}>
              {middleColumn.map((checklist) => (
                <IndividualChecklist key={checklist.Id} Id={checklist.Id} Name={checklist.Name} Tasks={checklist.Tasks} Description={checklist.Description} Users={checklist.Users}/>
              ))
              }
          </Grid>
          <Grid sx={{ width: '33.33%', display: 'flex', flexDirection: 'column' }}>
            {rightColumn.map((checklist) => (
              <IndividualChecklist key={checklist.Id} Id={checklist.Id} Name={checklist.Name} Tasks={checklist.Tasks} Description={checklist.Description} Users={checklist.Users}/>
            ))
            }
          </Grid>
        </Grid>
      </Box>
  );
}
  

export default AllChecklist;