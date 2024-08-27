import { useState } from "react";
import { Button, ButtonRemove, ButtonEdit } from "./components/Button";
import { Input } from "./components/Input";
import { Checkbox } from "./components/Checkbox";
import { DragDropContext, Droppable, Draggable, DraggableProvided, DroppableProvided } from "react-beautiful-dnd";

type Todo = {
	id: number;
	value: string;
	isDone: boolean;
};

function App() {
	const [inputValue, setInputValue] = useState("");
	const [todos, setTodos] = useState<Array<Todo>>([]);

	const addNewTodo = () => {
		const newTodo: Todo = {
			id: todos.length + 1,
			value: inputValue,
			isDone: false,
		};

		const newTodosValue = [...todos, newTodo];

		setTodos(newTodosValue);
		setInputValue("");
	};

	const removeTodo = (id: number) => {
		const newTodosValue = todos.filter((todo) => todo.id !== id);
		setTodos(newTodosValue);
	};

	const changeStateTask = (event: React.ChangeEvent<HTMLInputElement>) => {
		const id = Number(event.target.name);
		const newTodosValue = todos.map((todo) => {
			if (todo.id === id) {
				todo.isDone = !todo.isDone;
			}
			return todo;
		});
		setTodos(newTodosValue);
	};

	console.log(
		todos.map((todo, index) => {
			return (
				<div key={index}>
					<input type="checkbox" checked={todo.isDone} />
					<span>{todo.value}</span>
				</div>
			);
		})
	);
	return (
		<>
			<div className="p-5">
				<p className="text-red-500">Todo list</p>
				<div className="flex">
					<Input
						placeholder="Oh Yeah !"
						value={inputValue}
						onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
							setInputValue(e.target.value);
							console.log(e.target.value);
						}}
						type="text"
					></Input>
					<Button
						onClick={() => {
							addNewTodo();
						}}
						text="Add task"
					></Button>
				</div>
				<DragDropContext onDragEnd={() => {}}>
					<Droppable droppableId="todos">
						{(provided: DroppableProvided) => (
							<div ref={provided.innerRef} {...provided.droppableProps}>
								{todos.map((todo: Todo, index: number) => {
									return (
										<Draggable key={todo.id} draggableId={todo.id.toString()} index={index}>
											{(provided: DraggableProvided) => (
												<div ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
													<div className="flex justify-between items-center bg-gray-100 my-2 py-3 px-5">
														<Checkbox label="" isChecked={todo.isDone} onClick={changeStateTask} name={todo.id.toString()}></Checkbox>
														<span>{todo.value}</span>
														<div>
															<ButtonEdit
																onClick={() => {
																	console.log("Edit");
																}}
																text="Edit"
															></ButtonEdit>
															<ButtonRemove
																onClick={() => {
																	removeTodo(todo.id);
																}}
																text="Remove"
															></ButtonRemove>
														</div>
														<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-grid-3x3-gap" viewBox="0 0 16 16">
															<path d="M4 2v2H2V2zm1 12v-2a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1m0-5V7a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1m0-5V2a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1m5 10v-2a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1m0-5V7a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1m0-5V2a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1M9 2v2H7V2zm5 0v2h-2V2zM4 7v2H2V7zm5 0v2H7V7zm5 0h-2v2h2zM4 12v2H2v-2zm5 0v2H7v-2zm5 0v2h-2v-2zM12 1a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1zm-1 6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1zm1 4a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1z" />
														</svg>
													</div>
												</div>
											)}
										</Draggable>
									);
								})}
								{provided.placeholder}
							</div>
						)}
					</Droppable>
				</DragDropContext>
			</div>
		</>
	);
}

export default App;
