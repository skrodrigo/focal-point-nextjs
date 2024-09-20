import Image from "next/image";
import styles from "../styles/home.module.scss";

interface TaskListProps {
	tasks: string[];
	completedTasks: string[];
	onTaskComplete: (task: string) => void;
	onTaskDelete: (task: string) => void;
}

const TaskList: React.FC<TaskListProps> = ({
	tasks,
	completedTasks,
	onTaskComplete,
	onTaskDelete,
}) => {
	return (
		<div className={styles.taskList}>
			{tasks.length === 0 ? (
				<h2>Não existem tarefas para finalizar</h2>
			) : (
				<h2>Suas tarefas de hoje</h2>
			)}
			<ul>
				{tasks.map((task) => (
					<li key={task}>
						<div>
							<input type="checkbox" onClick={() => onTaskComplete(task)} />
							{task}
						</div>
						<button
							onClick={() => onTaskDelete(task)}
							className={styles.trashButton}
							type="button"
						>
							<Image
								src="./trash.svg"
								width={24}
								height={24}
								alt="Icone de Lixeira"
							/>
						</button>
					</li>
				))}
			</ul>

			{completedTasks.length > 0 && <h3>Tarefas finalizadas</h3>}
			<ul>
				{completedTasks.map((task) => (
					<li key={task} className={styles.liCompletedTask}>
						<div>
							<input type="checkbox" checked disabled />
							<s>{task}</s>
							<button
								onClick={() => onTaskDelete(task)}
								className={styles.trashButton}
								type="button"
							>
								<Image
									src="./trash.svg"
									width={24}
									height={24}
									alt="Icone de Lixeira"
								/>
							</button>
						</div>
					</li>
				))}
			</ul>
		</div>
	);
};

export default TaskList;
