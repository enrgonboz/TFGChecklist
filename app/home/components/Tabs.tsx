'use client';
import React from 'react';
import Avatar from '@mui/material/Avatar';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import AllChecklist from "./AllChecklist";
import { deepOrange, deepPurple } from '@mui/material/colors';
import { ChecklistProvider } from '@/app/checklist/context';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function CustomTabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export const ChecklistTabs = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <ChecklistProvider>
      <Box sx={{ width: '100%' }}> 
        <Box className="tabs">
          <Tabs value={value} onChange={handleChange} aria-label="tabs">
            <Tab label="Mis listas" {...a11yProps(0)} />
            <Tab label="Listas compartidas" {...a11yProps(1)} />
          </Tabs>
          <Avatar sx={{ bgcolor: '#FF674D' }}>E</Avatar>
        </Box>
        <CustomTabPanel value={value} index={0}>
          <AllChecklist />
        </CustomTabPanel>
        <CustomTabPanel value={value} index={1}>
          No tiene listas compartidas aún.
        </CustomTabPanel>
      </Box>
    </ChecklistProvider>
  );
}
