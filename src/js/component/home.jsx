import React, { useState } from "react";


//create your first component
const Home = () => {
	
	//tasks
	const[tasks, setTasks] = useState([])
	
	//input
	const[input, setInput] = useState("")

	//handle
	const handleSubmit = () => {

	}

	//delete task
	const deleteTask =(id) => {
		let filteredTasks = tasks.filter();
	}

	return (
		<div className="text-center">
			<h1 className="todo">Daily Goals</h1>
			<div className="list-card">
			
				<form onSubmit={handleSubmit}>
					<input 
						type="text" 
						value={input}
						onChange={event => setInput(event.target.value)}
						className="input-box"
						placeholder="No tasks, add a task"
					/>
				</form>

				<div className="list-items">
					{tasks.map((task) => {
						<div className="todo" key={task.id}>
							<p>{task.text}
								<button 
								className="button" 
								onClick={ () => deleteTask(task.id)}> 
									&#10060;
								</button>
							</p>
						</div>
					})}
					<p className="counter">{tasks.length = 1 ? "One task left" : `tasks left : ${tasks.length}` }</p>
				</div>

			</div>
		</div>
	);
};

export default Home;
