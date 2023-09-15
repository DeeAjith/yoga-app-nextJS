import React, { useState } from "react";
import Modal from "react-modal";
import { X } from "react-feather"; // Import the X icon
import style from "../../styles/modal.module.scss";
import Timer from "./Timer";

const PoseModal = ({ isOpen, onRequestClose, pose }) => {
  const [timerExpired, setTimerExpired] = useState(false);

  const handleTimerComplete = () => {
    setTimerExpired(true);
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Pose Description Modal"
      overlayClassName={style.customModal}
      className={style.customModalContent}
    >
      <button className={`${style.closeButton} group/close`} onClick={onRequestClose}>
        <X size={20} className="rounded-full p-2 w-[30px] h-[30px] group-hover/close:bg-gray-600 group-hover/close:stroke-gray-200 bg-gray-700 stroke-gray-100" />{" "}
      </button>
      <img
        className="object-contain bg-accent rounded-t-lg w-full h-64"
        src={pose.url_png}
        alt={pose.english_name}
      />
      <div className="flex flex-col items-center gap-4 mt-5">
        <Timer initialTime={3600} onTimerComplete={handleTimerComplete} />
        {timerExpired && <p className="text-gray-100 block">Timer Expired!</p>}
      </div>
      <div className="flex flex-col p-5">
        <h2 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-gray-100">
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
