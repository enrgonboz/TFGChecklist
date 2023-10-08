import { useEffect } from 'react';
import { AppProps } from 'next/app';
import { ChecklistProvider } from './context/ChecklistProvider';
import Home from './home/page';

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    // Your global initialization code can go here
  }, []);

  return (
    <ChecklistProvider>
      <Home {...pageProps} />
    </ChecklistProvider>
  );
}

export default MyApp;

