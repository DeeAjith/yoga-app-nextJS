import React from "react";
import Modal from "react-modal";
import { X } from "react-feather"; // Import the X icon
import style from "../../styles/modal.module.scss";

const PoseModal = ({ isOpen, onRequestClose, pose }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Pose Description Modal"
      overlayClassName={style.customModal}
      className="absolute left-[50%] gap-5 top-[50%] translate-x-[-50%] translate-y-[-50%] flex flex-col items-center dark:border-gray-700 dark:bg-gray-800 bg-white border border-gray-200 rounded-lg shadow md:flex-row xl:w-fit lg:w-[90%] md:w-[90%] sm:w-[90%] w-[90%]"
    >
      <button className={style.closeButton} onClick={onRequestClose}>
        <X size={20} className="stroke-gray-900 dark:stroke-white" />{" "}
        {/* Use the X icon */}
      </button>
      <img
        className="h-full object-cover bg-accent rounded-t-lg xl:h-96 lg:w-[50%] md:rounded-none md:rounded-l-lg md:w-[50%] md:h-full sm:w-full sm:h-96"
        src={pose.url_png}
        alt={pose.english_name}
      />
      <div className="flex flex-col p-5">
        <h2 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          {pose.english_name}
        </h2>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          {pose.pose_description}
        </p>
      </div>
    </Modal>
  );
};

export default PoseModal;
