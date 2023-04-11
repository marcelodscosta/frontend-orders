import React from 'react';
import { BrowserRouter, Routes, Route, Navigator } from 'react-router-dom';
import SignIn from '../components/SignIn';


export const AppRoutes = () => (
    <BrowserRouter>

        <Routes>

            <Route path='/' element={<SignIn />} />

        </Routes>


    </BrowserRouter>
);