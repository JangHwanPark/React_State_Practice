import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";

const defaultQueryFn = async ({ queryKey }) => {
  const url = `${import.meta.env.VITE_FETCH_URL}${queryKey[0]}`
  const res = await fetch(url)
  return res.json();
}

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      queryFn: defaultQueryFn,
    }
  }
});

ReactDOM.createRoot(document.getElementById('root')).render(
  /*<React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <App />
    </QueryClientProvider>
  </React.StrictMode>,*/
  <QueryClientProvider client={queryClient}>
    <App />
  </QueryClientProvider>
)