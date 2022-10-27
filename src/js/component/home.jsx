import React, { useState } from "react";


//create your first component
const Home = () => {
	
	//tasks
	const[tasks, setTasks] = useState([])
	
	//input
	const[input, setInput] = useState("")

	//handle
	const handleSubmit = (event) => {
		event.preventDefault()
		if (input != ""){
			let addTask = {
				id: Math.floor(Math.random() * 1000) ,
				text: input,
				completed: false,
			}
			setTasks([...tasks, addTask])
			setInput("")
		}
			
	}

	//delete task
	const deleteTask =(id) => {
		let filteredTasks = [...tasks].filter(task => task.id !== id);
		setTasks(filteredTasks)
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
					{tasks.map((task) => 
						 (
						<div className="todo" key={task.id}>
							<p>{task.text}
								<button 
								className="button" 
								onClick={ () => deleteTask(task.id)}> 
									&#10060;
								</button>
							</p>
						</div> )
						
					)}
					<p className="counter">{tasks.length > 0 ?  `tasks left : ${tasks.length}` : "No Tasks, Please add a task" }</p>
				</div>

			</div>
		</div>
	);
};

export default Home;
