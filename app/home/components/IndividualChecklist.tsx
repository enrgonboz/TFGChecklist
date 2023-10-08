"use client"

import * as React from 'react';
import { List, ListItemText, ListItem, Card, CardActionArea } from '@mui/material';
import { ChecklistAttributes, ChecklistData, TaskData, UserData } from '@/app/types/Interfaces';
import { Check, Task } from '@mui/icons-material';
import { useRouter } from 'next/navigation';


export default function IndividualChecklist({
  id,
  attributes,
}: ChecklistData) {
  const router = useRouter();


  const handleClickChecklist = () => {
    router.push(`/checklist?id=${id}`);
  }

  return (
    <Card sx={{ minWidth: 275 }}>
      <CardActionArea onClick={handleClickChecklist}>
       <List>
        <h1>{attributes.Title}</h1>
        {attributes.tasks?.data?.map((task: TaskData) => (
          <ListItem key={task.id}>
            <ListItemText primary={task.attributes.Name} secondary={task.attributes.Description}/>
          </ListItem>
        ))}
       </List>
       </CardActionArea>
    </Card>
    
  );
}
