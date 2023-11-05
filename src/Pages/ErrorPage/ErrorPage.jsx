import { Link } from "react-router-dom";


const ErrorPage = () => {
    return (
        <div>
            <section className="flex items-center h-screen p-16 text-gray-100">
	<div className="container flex flex-col items-center justify-center px-5 mx-auto my-8">
		<div className="max-w-md text-center">
			<h2 className="mb-8 font-extrabold text-9xl text-gray-600">
				<span className="sr-only">Error</span>404
			</h2>
			
			<p className="text-2xl font-semibold md:text-3xl text-black">Sorry, we could not find this page.</p>
			<p className="mt-4 mb-8 text-black">But do not worry, you can find plenty of other things on our homepage.</p>
			<Link to='/' rel="noopener noreferrer" href="#" className="px-8 py-3 font-semibold rounded bg-red-500 text-gray-900">Back to homepage</Link>
		</div>
        
	</div>
</section>
        </div>
    );
};

export default ErrorPage;