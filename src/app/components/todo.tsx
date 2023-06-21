"use client";

import React, { useState, ChangeEvent } from "react";
import { PencilSquareIcon, TrashIcon } from "@heroicons/react/24/solid";

interface TodoItem {
	task: string;
	id: number;
}

export default function Todo(): JSX.Element {
	const [items, setItems] = useState<TodoItem[]>([
		{ task: "Complete todo app", id: 1 },
	]);
	const [newTask, setNewTask] = useState<string>("");
	const [selectedItemId, setSelectedItemId] = useState<number | null>(null);

	const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
		setNewTask(event.target.value);
	};

	const handleAdd = (): void => {
		if (newTask) {
			const newItem: TodoItem = { task: newTask, id: items.length + 1 };
			setItems([...items, newItem]);
			setNewTask("");
		}
	};

	const handleUpdate = (id: number): void => {
		setSelectedItemId(id);
		const selectedItem = items.find((item) => item.id === id);
		if (selectedItem) {
			setNewTask(selectedItem.task);
		}
	};

	const handleSaveUpdate = (): void => {
		if (selectedItemId !== null) {
			const updatedItems = items.map((item) =>
				item.id === selectedItemId ? { ...item, task: newTask } : item
			);
			setItems(updatedItems);
			setNewTask("");
			setSelectedItemId(null);
		}
	};

	const handleCancelUpdate = (): void => {
		setSelectedItemId(null);
		setNewTask("");
	};

	const handleDelete = (id: number): void => {
		const updatedItems = items.filter((item) => item.id !== id);
		setItems(updatedItems);
	};

	return (
		<div className="">
			<div className="mb-6 text-left">
				<div>
					<input
						name="task"
						value={newTask}
						type="text"
						id="success"
						className="border text-green-400 placeholder-green-500 text-sm rounded-lg focus:outline-none focus:shadow-none focus:ring-0 block w-full p-2 bg-gray-700 border-green-500"
						placeholder="Add an item"
						onChange={handleChange}
					/>
				</div>
				<button
					disabled={newTask.length===0}
					className="text-xs bg-blue-500 rounded text-center w-full my-2 py-2 disabled:bg-blue-600 text-gray-200"
					onClick={selectedItemId !== null ? handleSaveUpdate : handleAdd}
				>
					{selectedItemId !== null ? "Save" :
                    newTask.length===0?"(disabled) Enter an item first" : "+ Add"}
				</button>
			</div>

			<div className="relative overflow-x-auto shadow-md sm:rounded-lg">
				<table className="w-full text-sm text-left text-gray-400">
					<thead className="text-xs uppercase bg-gray-700 text-gray-400">
						<tr>
							<th scope="col" className="px-6 py-3">
								Tasks
							</th>
							<th scope="col" className="px-6 py-3">
								Actions
							</th>
						</tr>
					</thead>
					<tbody>
						{items.map(({ task, id }: TodoItem, index: number) => (
							<tr key={index} className="border-b bg-gray-900 border-gray-700">
								<th
									scope="row"
									className="px-6 py-4 font-medium text-gray-400 whitespace-nowrap"
								>
									{selectedItemId === id ? (
										<input
											type="text"
											value={newTask}
											onChange={handleChange}
											className="border-b bg-gray-900 border-gray-700 text-gray-400 focus:outline-none focus:ring-0 focus:border-blue-500"
										/>
									) : (
										task
									)}
								</th>
								<td className="px-6 py-4 flex space-x-4 mx-auto">
									{selectedItemId === id ? (
										<>
											<button
												className="h-4 w-4 text-blue-500 cursor-pointer"
												onClick={handleSaveUpdate}
											>
												<PencilSquareIcon />
											</button>
											<button
												className="h-4 w-4 text-red-700 cursor-pointer"
												onClick={handleCancelUpdate}
											>
												<TrashIcon />
											</button>
										</>
									) : (
										<>
											<button
												className="h-4 w-4 text-blue-500 cursor-pointer"
												onClick={() => handleUpdate(id)}
											>
												<PencilSquareIcon />
											</button>
											<button
												className="h-4 w-4 text-red-700 cursor-pointer"
												onClick={() => handleDelete(id)}
											>
												<TrashIcon />
											</button>
										</>
									)}
								</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>
		</div>
	);
}
