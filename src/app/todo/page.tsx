import React from "react";
import Todo from "../components/todo";

export default function todo() {
	return (
		<div className="flex items-center mx-auto max-w-md mb-32">
			<div className="flex-col w-full min-h-[500px] border rounded-lg px-5">
				<div className='py-5 border-b border-sky-700'>
				<p className='text-4xl text-center'>Todo</p>
				</div>
				<div className="w-full my-5">
					<Todo />
				</div>
			</div>
		</div>
	);
}
