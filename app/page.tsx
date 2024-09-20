"use client";

// Importação dos estilos
import Image from "next/image";
import { useEffect, useState } from "react";
import AddTaskModal from "./components/addTaskModal";
import DeleteTaskModal from "./components/deleteTaskModal";
import DisplayDate from "./components/displayDate";
import TaskList from "./components/taskList";
import styles from "./styles/home.module.scss";

export default function Home() {
	// Estados para tasks, completedTasks e controle de modais
	const [tasks, setTasks] = useState<string[]>([]);
	const [completedTasks, setCompletedTasks] = useState<string[]>([]);
	const [showAddModal, setShowAddModal] = useState<boolean>(false);
	const [showDeleteModal, setShowDeleteModal] = useState<boolean>(false);
	const [taskToDelete, setTaskToDelete] = useState<string | null>(null);

	// useEffect para carregar as tasks e completedTasks do localStorage
	useEffect(() => {
		const savedTasks = JSON.parse(
			localStorage.getItem("tasks") || "[]",
		) as string[];
		const savedCompletedTasks = JSON.parse(
			localStorage.getItem("completedTasks") || "[]",
		) as string[];
		setTasks(savedTasks);
		setCompletedTasks(savedCompletedTasks);
	}, []);

	// useEffect para salvar tasks e completedTasks no localStorage sempre que forem alteradas
	useEffect(() => {
		localStorage.setItem("tasks", JSON.stringify(tasks));
		localStorage.setItem("completedTasks", JSON.stringify(completedTasks));
	}, [tasks, completedTasks]);

	// Função para adicionar uma nova task
	const addTask = (newTask: string) => {
		setTasks([...tasks, newTask]); // Adiciona a nova tarefa à lista de tasks
		setShowAddModal(false); // Fecha o modal de adicionar tarefa
	};

	// Função para completar uma task
	const completeTask = (task: string) => {
		setTasks(tasks.filter((t) => t !== task)); // Remove a task da lista de tasks
		setCompletedTasks([...completedTasks, task]); // Adiciona a task na lista de tasks completadas
	};

	// Função para deletar uma task, seja das pendentes ou das completadas
	const deleteTask = () => {
		// Remove a task da lista de tasks (pendentes)
		setTasks(tasks.filter((t) => t !== taskToDelete));
		// Remove a task da lista de tasks completadas, caso esteja nela
		setCompletedTasks(completedTasks.filter((t) => t !== taskToDelete));
		setShowDeleteModal(false); // Fecha o modal de deletar
	};

	return (
		<main className={styles.container}>
			<nav className={styles.header}>
				<Image
					src="/logo.svg"
					priority
					alt="Logo FocalPoint"
					width={150}
					height={36}
				/>
				<h1>Bem-vindo de volta, Marcus</h1>
				<span>
					<DisplayDate />
				</span>
			</nav>

			{/* Componente TaskList, passando tasks e completedTasks */}
			<TaskList
				tasks={tasks}
				completedTasks={completedTasks}
				onTaskComplete={completeTask}
				onTaskDelete={(task: string) => {
					setShowDeleteModal(true); // Mostra o modal de deletar
					setTaskToDelete(task); // Define qual task será deletada
				}}
			/>

			{/* Botão para abrir o modal de adicionar task */}
			<button
				type="button"
				onClick={() => setShowAddModal(true)}
				className={styles.addTaskButton}
			>
				Adicionar nova tarefa
			</button>

			{/* Renderiza o modal de adicionar task se showAddModal for true */}
			{showAddModal && (
				<AddTaskModal
					onAddTask={addTask}
					onClose={() => setShowAddModal(false)}
				/>
			)}

			{/* Renderiza o modal de deletar task se showDeleteModal for true */}
			{showDeleteModal && (
				<DeleteTaskModal
					onDeleteTask={deleteTask}
					onClose={() => setShowDeleteModal(false)}
				/>
			)}
		</main>
	);
}
