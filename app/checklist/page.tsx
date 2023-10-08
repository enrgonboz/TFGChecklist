"use client"
import React from "react";
import ChecklistView from "./components/ChecklistView";
import { ChecklistDataMockup } from "../types/mockupsInterfaces";

const checklist : ChecklistDataMockup = {
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
  };

export default function ChecklistViewHome() {

return (
     <ChecklistView checklist={checklist}  />
 );
}