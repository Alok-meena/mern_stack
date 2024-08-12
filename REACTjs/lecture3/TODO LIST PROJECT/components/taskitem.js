import React from "react";

const TaskItem = ({ task, index, deleteTask }) => {
	return (
		<li className="task-item">
			{task}
			<button onClick={() => deleteTask(index)}>Delete</button>
		</li>
	);
};

export default TaskItem;
