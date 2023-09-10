"use client";
import React, { useState } from "react";
import style from "../../styles/pose-list.module.scss";
import PoseModal from "./PoseModal"; // Import the PoseModal component
import { ArrowRight, RotateCw } from "react-feather";

const PoseList = ({ poses }) => {
  const [expandedId, setExpandedId] = useState(null);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [modalPose, setModalPose] = useState(null);
  const [visiblePoses, setVisiblePoses] = useState(4); // Initial number of visible poses

  const toggleDescription = (id) => {
    setExpandedId(id);
  };

  const openModal = (pose) => {
    setModalIsOpen(true);
    setModalPose(pose);
  };

  const closeModal = () => {
    setModalIsOpen(false);
    setModalPose(null);
  };

  const handleLoadMore = () => {
    setVisiblePoses((prevVisiblePoses) => prevVisiblePoses + 5);
  };
  const poseCards = poses.slice(0, visiblePoses).map((pose) => (
    <div
      className="group/card lg:w-[calc(100%/4-1.25rem)] md:w-[calc(100%/3-1.25rem)] sm:w-[calc(100%/2-1rem)]"
      key={pose.id}
    >
      <div class="bg-white w-full h-full md:m-0 shadow-md border border-gray-200 rounded-2xl dark:bg-gray-800 dark:border-gray-700">
        <a href="#" className="">
          <img
            class="rounded-t-2xl px-8 py-5 bg-accent card-hover:scale-105"
            src={pose.url_png}
            alt={pose.english_name}
          />
        </a>
        <div class="p-5 flex flex-col items-start">
          <a href="#">
            <h5 class="text-gray-900 font-bold text-2xl tracking-tight mb-2 dark:text-white">
              {pose.english_name}
            </h5>
          </a>
          <p class="font-normal text-gray-700 mb-3 dark:text-gray-400">
            {pose.sanskrit_name}
          </p>
          <button
            onClick={() => openModal(pose)}
            class="group mt-auto text-white bg-black dark:bg-gray-900 dark:hover:bg-gray-700 dark:focus:ring-gray-900 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-2 text-center inline-flex items-center"
          >
            Read more
            <ArrowRight
              className="ml-2 stroke-white dark:stroke-gray-50 group-hover:stroke-white group-hover:translate-x-1"
              size={18}
            />
          </button>
        </div>
      </div>
    </div>
  ));

  return (
    <div className={`flex flex-row flex-wrap justify-center gap-5 mb-20`}>
      {poseCards}
      {visiblePoses < poses.length && (
        <div className={style.load_more}>
          <button
            className="group bg-white text-gray-950 shadow-md border border-gray-200 hover:bg-gray-400 hover:text-gray-50 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-900 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-lg px-4 py-2 text-center inline-flex items-center"
            onClick={handleLoadMore}
          >
            Load More
            <RotateCw
              className="ml-2 stroke-gray-950 dark:stroke-gray-50 group-hover:stroke-gray-50 group-hover:rotate-45"
              size={18}
            />
          </button>
        </div>
      )}
      {/* Render the modal */}
      {modalPose && (
        <PoseModal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          pose={modalPose}
        />
      )}
    </div>
  );
};

export default PoseList;
