
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
//import './index.css';
import App from './App';
import Appbar from './pages/components/Appbar';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
        <Appbar position="relative"></Appbar>
        <App />
    </BrowserRouter>
);