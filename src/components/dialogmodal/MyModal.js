import React from "react";
import Modal from "react-modal";
function MyModal({ modalIsOpen, closeModal, children }) {
  return (
    <Modal
      isOpen={modalIsOpen}
      onRequestClose={closeModal}
      ariaHideApp={false}
      className="modal-content"
      overlayClassName="modal-overlay"
      style={{
        content: {
          width: "100%",
          maxWidth: "480px",
          height: "80vh",
          maxHeight: "680px",
          padding: "20px",
          borderRadius: "8px",
          backgroundColor: "#fff",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          overflowY: "auto",
          margin: 16,
          overscrollBehavior: "contain",
        },
        overlay: {
          backgroundColor: "rgba(0, 0, 0, 0.5)",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
        },
      }}
    >
      {children}
    </Modal>
  );
}

export default MyModal;
