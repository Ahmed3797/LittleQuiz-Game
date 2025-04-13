import Modal from "react-modal";
import { FC } from "react";
import { LayoutModalProps } from "../../utils/interfaces/Home.interface";

Modal.setAppElement("#root");

const LayoutModal: FC<LayoutModalProps> = ({
  isOpen,
  onClose,
  title,
  children,
}) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      className="bg-white rounded-xl w-full max-w-2xl p-6 mx-4 shadow-lg relative"
      overlayClassName="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"
    >
      <div className="flex justify-between items-center border-b pb-2 mb-4">
        <h2 className="text-xl font-semibold">{title}</h2>
        <button
          onClick={onClose}
          className="text-2xl font-bold text-gray-500 hover:text-red-500"
        >
          ×
        </button>
      </div>
      <div>{children}</div>
    </Modal>
  );
};

export default LayoutModal;
