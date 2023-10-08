"use client"
import { useEffect } from 'react';
import { AppProps } from 'next/app';
import Home from './home/page';
import { ThemeProvider } from '@mui/styles';
import { createTheme } from '@mui/material';
import { ChecklistProvider } from './checklist/context';

const Theme = createTheme({
  palette: {
    primary: {
      main: '#1A0497',
    },
  },
});

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChecklistProvider>
      <ThemeProvider theme={Theme}>
        <Home {...pageProps} />
      </ThemeProvider>
    </ChecklistProvider>
  );
}

export default MyApp;

