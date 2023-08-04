import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, redirect, RouterProvider } from 'react-router-dom'
import './index.css';
import App from './App';
import LoginView from './views/LoginView';

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        loader: () => {
            const username = localStorage.getItem('username') || null

            if (!username) {
                return redirect('/login')
            }

            return { username }
        }
    },
    {
        path: '/login',
        element: <LoginView />
    }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);
