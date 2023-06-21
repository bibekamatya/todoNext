import Link from "next/link";
import React from "react";

function Footer() {
	return (
		<div>
			<footer className="bg-white dark:bg-gray-900">
				<div className="mx-auto w-full max-w-screen-xl">
					<div className="grid grid-cols-2 gap-8 px-4 py-6 lg:py-8 md:grid-cols-4">
						<div>
							<h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
								Company
							</h2>
							<ul className="text-gray-500 dark:text-gray-400 font-medium">
								<li className="mb-4">
									<Link href="/about" className=" hover:underline">
										About
									</Link>
								</li>
								<li className="mb-4">
									<Link href="/" className="hover:underline">
										Careers
									</Link>
								</li>
								<li className="mb-4">
									<Link href="/" className="hover:underline">
										Brand Center
									</Link>
								</li>
								<li className="mb-4">
									<Link href="/" className="hover:underline">
										Blog
									</Link>
								</li>
							</ul>
						</div>
						<div>
							<h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
								Help center
							</h2>
							<ul className="text-gray-500 dark:text-gray-400 font-medium">
								<li className="mb-4">
									<Link href="/" className="hover:underline">
										Discord Server
									</Link>
								</li>
								<li className="mb-4">
									<Link href="/" className="hover:underline">
										Twitter
									</Link>
								</li>
								<li className="mb-4">
									<Link href="/" className="hover:underline">
										Facebook
									</Link>
								</li>
								<li className="mb-4">
									<Link href="/" className="hover:underline">
										Contact Us
									</Link>
								</li>
							</ul>
						</div>
						<div>
							<h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
								Legal
							</h2>
							<ul className="text-gray-500 dark:text-gray-400 font-medium">
								<li className="mb-4">
									<Link href="/" className="hover:underline">
										Privacy Policy
									</Link>
								</li>
								<li className="mb-4">
									<Link href="/" className="hover:underline">
										Licensing
									</Link>
								</li>
								<li className="mb-4">
									<Link href="/" className="hover:underline">
										Terms &amp; Conditions
									</Link>
								</li>
							</ul>
						</div>
						<div>
							<h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
								Download
							</h2>
							<ul className="text-gray-500 dark:text-gray-400 font-medium">
								<li className="mb-4">
									<Link href="/" className="hover:underline">
										iOS
									</Link>
								</li>
								<li className="mb-4">
									<Link href="/" className="hover:underline">
										Android
									</Link>
								</li>
								<li className="mb-4">
									<Link href="/" className="hover:underline">
										Windows
									</Link>
								</li>
								<li className="mb-4">
									<Link href="/" className="hover:underline">
										MacOS
									</Link>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</footer>
			<footer className="bg-white dark:bg-gray-800">
				<div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
					<span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
						© 2023
						<Link href="/" className="hover:underline">
							LostSoul 
						</Link>
						  .All Rights Reserved.
					</span>
					<ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
						<li>
							<Link href="/about" className="mr-4 hover:underline md:mr-6 ">
								About
							</Link>
						</li>

						<li>
							<Link href="/" className="mr-4 hover:underline md:mr-6">
								Licensing
							</Link>
						</li>
						<li>
							<Link href="/" className="hover:underline">
								Contact
							</Link>
						</li>
					</ul>
				</div>
			</footer>
		</div>
	);
}

export default Footer;
