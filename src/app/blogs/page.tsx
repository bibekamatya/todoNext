import React from "react";
import Image from "next/image";
import Link from "next/link";

async function getData() {
	const res = await fetch("https://jsonplaceholder.typicode.com/posts");
	if (!res.ok) {
		throw new Error("Failed to fetch data");
	}

	return res.json();
}

export default async function Blogs() {
	const data = await getData();
	console.log(data);

	return (
		<div className="my-32 w-full">
			<div className="text-3xl font-semibold w-full my-10">
				<h1 className="text-center">My Blogs</h1>
			</div>
			<div className="grid grid-cols-3 gap-10 px-10">
				{data.map((data: any) => {
					const { title, body, id } = data;
					return (
						<div
							key={title}
							className="mx-auto bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
						>
							<p>
								<Image
									className="rounded-t-lg w-full h-60"
									src='https://st2.depositphotos.com/1006899/8421/i/600/depositphotos_84219350-stock-photo-word-blog-suspended-by-ropes.jpg'
									alt=""
									height={100}
									width={100}
								/>
							</p>
							<div className="p-5">
								<p>
									<span className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
										{title}
									</span>
								</p>
								<p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
									{body}
								</p>
								<Link
									href={`/blogs/${id}`}
									className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
								>
									Read more
									<svg
										aria-hidden="true"
										className="w-4 h-4 ml-2 -mr-1"
										fill="currentColor"
										viewBox="0 0 20 20"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path
											fill-rule="evenodd"
											d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
											clip-rule="evenodd"
										></path>
									</svg>
								</Link>
							</div>
						</div>
					);
				})}
			</div>
		</div>
	);
}
