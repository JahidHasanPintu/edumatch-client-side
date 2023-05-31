import React from 'react';

const PostProposal = () => {
    return (
        <div>
           <section className="p-6 text-gray-900">
	<form novalidate="" className="container w-full max-w-xl p-8 mx-auto space-y-6 rounded-md shadow bg-gray-50 ng-untouched ng-pristine ng-valid">
		<h2 className="w-full text-3xl font-bold leading-tight"> Complete you application
        </h2>
		<div>
			<label for="name" className="block mb-1 ml-1">Subject</label>
			<input id="name" type="text" placeholder="select a subject" required="" className="block w-full p-2 rounded focus:outline-none focus:ring focus:ring-opacity-25 focus:ring-violet-400 bg-gray-100" />
		</div>
		<div>
			<label for="headline" className="block mb-1 ml-1">Add Headline</label>
			<input id="headline" type="text" placeholder="add a title" required="" className="block w-full p-2 rounded focus:outline-none focus:ring focus:ring-opacity-25 focus:ring-violet-400 bg-gray-100" />
		</div>
		<div>
			<label for="description" className="block mb-1 ml-1">Description</label>
			<textarea id="description" type="text" placeholder="description..." className="block w-full p-2 rounded autoexpand focus:outline-none focus:ring focus:ring-opacity-25 focus:ring-violet-400 bg-gray-100"></textarea>
		</div>
		<div>
			<button type="submit" className="w-full px-4 py-2 font-bold rounded shadow focus:outline-none focus:ring  focus:ring-opacity-50 bg-blue-600 focus:ring-violet-400 hover:-blue-800 text-white">Submit </button>
		</div>
	</form>
</section>
        </div>
    );
};

export default PostProposal;