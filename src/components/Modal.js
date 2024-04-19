import React, { useState } from "react";
import "./modal.css";

const Modal = ({ text, onClose }) => {
	const [isOpen, setIsOpen] = useState(true);

	const closeModal = () => {
		setIsOpen(false);
		onClose();
	};

	return (
		<>
			{isOpen && (
				<div className="modal-overlay" onClick={closeModal}>
					<div className="modal">
						<div className="modal-content">
							<span className="close" onClick={closeModal}>
								&times;
							</span>
							<p>{text}</p>
						</div>
					</div>
				</div>
			)}
		</>
	);
};

export { Modal };
