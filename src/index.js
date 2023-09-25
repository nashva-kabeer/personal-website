import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import Layout from './website/Layout';
import About from './website/About';
import Contact from './website/Contact';
import Home from './website/Home';
import './website.css';

export default function Apps() {
    return(
        <BrowserRouter>
        <Routes>
            <Route path='/' element={<Layout/>}>
                <Route index element={<Home/>}/>
                <Route path='contact' element={<Contact/>}/>
                <Route path='about' element={<About/>}/>
            </Route>
        </Routes>
        </BrowserRouter>
    );
}
const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);
root.render(<Apps/>);
