import React from 'react';
import { RouterProvider } from 'react-router-dom';
import { routerConfig } from './services/routerConfig';

function App() {
  const router = routerConfig;
  return (
    <RouterProvider router={router} />
  );
}

export default App;
