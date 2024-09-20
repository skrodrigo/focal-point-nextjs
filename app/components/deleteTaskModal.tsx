// DeleteTaskModal.tsx
import type React from "react";
import styles from "../styles/home.module.scss";

interface DeleteTaskModalProps {
	onDeleteTask: () => void;
	onClose: () => void;
}

const DeleteTaskModal: React.FC<DeleteTaskModalProps> = ({
	onDeleteTask,
	onClose,
}) => {
	return (
		<div className={styles.modalOverlay}>
			<div className={styles.modalContent}>
				<h2 className={styles.modalTitle}>Deletar tarefa</h2>
				<p className={styles.modalText}>
					Tem certeza que você deseja deletar essa tarefa?
				</p>
				<div className={styles.buttonGroup}>
					<button
						onClick={onClose}
						className={styles.cancelButton}
						type="button"
					>
						Cancelar
					</button>
					<button
						onClick={onDeleteTask}
						className={styles.deleteButton}
						type="button"
					>
						Deletar
					</button>
				</div>
			</div>
		</div>
	);
};

export default DeleteTaskModal;
