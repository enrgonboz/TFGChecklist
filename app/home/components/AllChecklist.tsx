"use client"
import React, { useState } from 'react';
import {
  Container,
  Typography,
} from '@mui/material';
import IndividualChecklist from './IndividualChecklist';
import { ChecklistDataMockup } from '@/app/types/mockupsInterfaces';

const checklistsMockup: ChecklistDataMockup[] = [
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
  }
  
  

]

const AllChecklist: React.FC = () => {
  const [checklists, setChecklists] = useState<ChecklistDataMockup[]>(checklistsMockup);
    
    
  return (
    <Container maxWidth="sm">
      <Typography variant="h4" align="center" gutterBottom>
        Checklists
      </Typography>
         {checklists.map((checklist) => (
           <div key={checklist.Id}>
            <IndividualChecklist  Id={checklist.Id} Name={checklist.Name} Tasks={checklist.Tasks} Description={checklist.Description} Users={checklist.Users}/>
           </div>
        ))
        }
    </Container>
  );
}
  

export default AllChecklist;