// AddTaskModal.tsx
import type React from "react";
import { useState } from "react";
import styles from "../styles/home.module.scss";

interface AddTaskModalProps {
	onClose: () => void;
	onAddTask: (title: string) => void;
}

const AddTaskModal: React.FC<AddTaskModalProps> = ({ onClose, onAddTask }) => {
	const [title, setTitle] = useState("");

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		if (title.trim()) {
			onAddTask(title);
			setTitle("");
			onClose();
		}
	};

	return (
		<div className={styles.modalOverlay}>
			<div className={styles.modalContent}>
				<h2 className={styles.modalTitle}>Nova tarefa</h2>
				<form onSubmit={handleSubmit}>
					<div className={styles.inputGroup}>
						<label htmlFor="taskTitle" className={styles.inputLabel}>
							Título
						</label>
						<input
							id="taskTitle"
							type="text"
							className={styles.input}
							placeholder="Digite"
							value={title}
							onChange={(e) => setTitle(e.target.value)}
						/>
					</div>
					<div className={styles.buttonGroup}>
						<button
							type="button"
							className={styles.cancelButton}
							onClick={onClose}
						>
							Cancelar
						</button>
						<button type="submit" className={styles.addButton}>
							Adicionar
						</button>
					</div>
				</form>
			</div>
		</div>
	);
};

export default AddTaskModal;
