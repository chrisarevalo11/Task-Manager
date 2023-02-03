import React, { useState, useRef } from 'react'
import { TaskCard } from './components/TaskCard'

type FormElement = React.FormEvent<HTMLFormElement>
export interface ITask {
	name: string,
	description: string,
	done: boolean
}


function App(): JSX.Element {

	const [newTask, setNewTask] = useState<string>('')
	const [newTaskDesc, setNewTaskDesc] = useState<string>('')
	const [tasks, setTasks] = useState<ITask[]>([])
	const taskInput = useRef<HTMLInputElement>(null)

	const handleSubmit = (e: FormElement): void => {
		e.preventDefault()
		addTask(newTask, newTaskDesc)
		setNewTask('')
		setNewTaskDesc('')
		taskInput.current?.focus()
	}

	const addTask = (name: string, description: string): void => {
		if (name === '') return
		const newTasks: ITask[] = [...tasks, { name, description, done: false }]
		setTasks(newTasks)
	}

	const toggleDoneTask = (i: number): void => {
		const newTasks: ITask[] = [...tasks]
		newTasks[i].done = !newTasks[i].done
		setTasks(newTasks)
	}

	const removeTask = (i: number): void => {
		const newTasks: ITask[] = tasks.filter((task, j) => i !== j)
		setTasks(newTasks)
	}

	return (
		<div className="container p-4">
			<div className="row">
				<div className="col-md-6 offset-md-3">
					<div className="card">
						<div className="card-body">
							<h2 style={{
								textAlign: 'center'
							}}>
								Task Manager
							</h2>
							<form onSubmit={handleSubmit}>
								<label htmlFor="task-title">Task</label>
								<input
									className='form-control mb-2'
									type="text"
									onChange={e => setNewTask(e.target.value)}
									value={newTask}
									autoFocus
									required
									autoComplete='off'
									ref={taskInput}
									name='task-title'
								/>
								<label htmlFor="task-desc">Description</label>
								<input
									className='form-control'
									autoComplete='off'
									type="text"
									onChange={e => setNewTaskDesc(e.target.value)}
									value={newTaskDesc}
									name='task-desc'
								/>
								<button
									className='btn btn-success mt-3'
									style={{
										display: 'block', width: '100%'
									}}
								>
									Save
								</button>
							</form>
						</div>
					</div>
					{
						tasks.map((task: ITask, i: number) =>
							<TaskCard
								task={task}
								i={i}
								toggleDoneTask={toggleDoneTask}
								removeTask={removeTask}
							/>
						)
					}
				</div>
			</div>
		</div>
	);
}

export default App;
