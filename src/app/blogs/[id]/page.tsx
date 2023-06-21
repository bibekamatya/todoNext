import React from "react";

export default async function BlogsDetail({ params }: any) {
	const id = params.id;
	const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
	const data = await res.json();
	return (
		<section className="bg-center bg-no-repeat bg-[url('https://flowbite.s3.amazonaws.com/docs/jumbotron/conference.jpg')] bg-gray-700 bg-blend-multiply">
			<div className="px-4 mx-auto max-w-screen-xl text-center py-24 lg:py-56">
				<h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-white md:text-5xl lg:text-6xl">
					{data.title}
				</h1>
				<p className="mb-8 text-lg font-normal text-gray-300 lg:text-xl sm:px-16 lg:px-48">
					{data.body}
				</p>
			</div>
		</section>
	);
}
