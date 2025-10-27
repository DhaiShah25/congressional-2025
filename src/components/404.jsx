export default function NotFound() {
    return (
        <div className="grid place-content-center h-screen">
            <h1 className="text-8xl text-center">404 Not Found!</h1>
            <p className="text-xl text-center">This is Not a Valid Page on This Website!</p>
            <a className="underline p-2 rounded text-center text-4xl" href="/">Go Back To The Homepage</a>
        </div>
    );
}
