// src/Components/ErrorBoundary.jsx
import React from 'react';
import ErrorPage from './Components/ErrorPage/ErrorPage';
 
class ErrorBoundary extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state = { hasError: false };
    }

    static getDerivedStateFromError (error)
    {
        // Update state to indicate an error has occurred
        return { hasError: true };
    }

    componentDidCatch (error, errorInfo)
    {
        // Log the error to an error reporting service
        console.error('Error caught in ErrorBoundary:', error, errorInfo);
    }

    render ()
    {
        if (this.state.hasError)
        {
            // Render fallback UI
            return <ErrorPage />;
        }

        return this.props.children;
    }
}

export default ErrorBoundary;
