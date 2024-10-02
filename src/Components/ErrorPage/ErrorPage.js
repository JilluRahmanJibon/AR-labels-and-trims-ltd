
const ErrorPage = () =>
{
    return (
        <div className="flex flex-col items-center justify-center min-h-screen">
            <h1 className="text-4xl font-bold">404 Not Found</h1>
            <p className="mt-4 text-lg">The page you are looking for does not exist.</p>
            <a href="/" className="mt-6 text-blue-500 hover:underline">Go back to Home</a>
        </div>
    );
};

export default ErrorPage;
