"use client"
import React from "react";
import { ChecklistProvider } from "../context/ChecklistProvider";
import ChecklistView from "./components/ChecklistView";

export default function ChecklistViewHome() {

return (
   <ChecklistProvider>
     <ChecklistView />
   </ChecklistProvider>
 );
}