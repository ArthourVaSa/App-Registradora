import React from 'react';
import {createRoot} from 'react-dom/client';
import './index.css';
import { PruebaApp } from './PruebaApp.js';

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<PruebaApp/>);