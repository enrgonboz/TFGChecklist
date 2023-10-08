"use client"

import * as React from 'react';
import { Grid, List, ListItemText, ListItem, Card, CardActionArea, CardContent, Typography } from '@mui/material';
import { useRouter } from 'next/navigation';
import { ChecklistDataMockup, TaskDataMockup } from '@/app/types/mockupsInterfaces';
import './style.css'

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
    <Grid item sx={{ padding: '8px 4px 0px'}}>
      <Card className='card'>
        <CardActionArea onClick={handleClickChecklist}>
          <List>
            <Typography variant="subtitle2" component="div" className='title-card'>{Name}</Typography>
              {Tasks.map((task: TaskDataMockup) => (
                <ListItem className='card-content' key={task.Id}>
                  <Typography variant="caption" component="div">· {task.Name}</Typography>
                </ListItem>
              ))}
          </List>
        </CardActionArea>
      </Card>
    </Grid>
  );
}
