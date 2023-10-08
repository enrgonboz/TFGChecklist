"use client"
import React, { useState, useEffect } from 'react';
import {
  Container,
  Typography,
  List,
  ListItem,
  ListItemText,
  Checkbox,
  Paper,
  TextField,
  Button,
} from '@mui/material';
import IndividualChecklist from './IndividualChecklist';
import axios from 'axios'; // Import Axios
import { ChecklistData, ChecklistsApiResponse } from '@/app/types/Interfaces';
import { useChecklistContext } from '@/app/context/ChecklistProvider';


const AllChecklist: React.FC = () => {
    const [checklists, setChecklists] = useState<ChecklistData[]>([]);
    const [loading, setLoading] = useState(true); // Initialize loading as true
    const { refreshTrigger } = useChecklistContext(); // Access the context

    const fetchData = async () => {
      const jwtToken = localStorage.getItem('token'); // Replace with your actual JWT retrieval logic
  
      // Make sure you have the JWT token before making the request
      if (jwtToken) {
        try {
          console.log("RF",refreshTrigger)
          //const response: ChecklistsApiResponse = await axios.get('http://localhost:1337/api/checklists?populate=*', {
          const response: ChecklistsApiResponse = await axios.get('https://installing-strengths-metadata-turn.trycloudflare.com/api/checklists?populate=*', {

            headers: {
              Authorization: `Bearer ${jwtToken}`,
            },
          });
          const userChecklists = response.data.data;
          setChecklists(userChecklists);
          setLoading(false); // Set loading to false when data is successfully fetched
        } catch (error) {
          console.error('Error fetching checklists:', error);
          setLoading(false); // Set loading to false on error as well
        }
      }
    };
  // Use useEffect to fetch checklists when the component mounts
  useEffect(() => {
    fetchData();
  }, []);

  // Use another useEffect to refresh checklists when refreshTrigger changes
  useEffect(() => {
    if (refreshTrigger) {
      fetchData(); // Call the async function
    }
  }, [refreshTrigger]);

  const handleAddChecklistSuccess = () => {
    // This function will be called when a new checklist is successfully created
    //setRefreshTrigger(true); // Trigger a refresh
  };
    
  return (
    <Container maxWidth="sm">
      <Typography variant="h4" align="center" gutterBottom>
        Checklists
      </Typography>
      {loading ? (
        // Show a loading spinner while data is being fetched
        <div className="spinner">Loading...</div>
      ) : (
        // // Once data is loaded, map over checklists and render them
         checklists.map((checklist) => (
           <div key={checklist.id}>
            <IndividualChecklist  id={checklist.id} attributes={checklist.attributes} />
           </div>
        ))
      )}
    </Container>
  );
}
  

export default AllChecklist;