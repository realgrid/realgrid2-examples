import React from 'react';
import './index.css';
import '../node_modules/realgrid/dist/realgrid-style.css'
import App from './App';

import { createRoot } from 'react-dom/client';
const container = document.getElementById('root');
const root = createRoot(container); 
root.render(<App tab="home" />);
