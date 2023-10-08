"use client"

import * as React from 'react';
import { List, ListItemText, ListItem, Card, CardActionArea } from '@mui/material';
import { useRouter } from 'next/navigation';
import { ChecklistDataMockup, TaskDataMockup } from '@/app/types/mockupsInterfaces';


export default function IndividualChecklist({
  Id,
  Name,
  Tasks,
  Description,
  Users,
}: ChecklistDataMockup) {
  const router = useRouter();


  const handleClickChecklist = () => {
    router.push(`/checklist?id=${Id}`);
  }

  return (
    <Card sx={{ minWidth: 275 }}>
      <CardActionArea onClick={handleClickChecklist}>
       <List>
        <h1>{Name}</h1>
        {Tasks.map((task: TaskDataMockup) => (
          <ListItem key={task.Id}>
            <ListItemText primary={task.Name} secondary={task.Description}/>
          </ListItem>
        ))}
       </List>
       </CardActionArea>
    </Card>
    
  );
}
