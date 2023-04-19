import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
//import './index.css';
import App from './App';
import Appbar from './pages/components/Appbar';
import { Card } from '@mui/material';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
        <Card>
            <Appbar position="sticky"></Appbar>
        </Card>
        <App />
    </BrowserRouter>
);