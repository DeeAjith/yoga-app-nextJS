"use client";
import React, { useEffect, useState } from "react";
import style from "@/styles/pose-list.module.scss";
import PoseModal from "./PoseModal"; // Import the PoseModal component
import { ArrowRight, RotateCw } from "react-feather";
//testing git push
const PoseList = ({ poses }) => {
  const [expandedId, setExpandedId] = useState(null);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [modalPose, setModalPose] = useState(null);
  const [visiblePoses, setVisiblePoses] = useState(getInitialVisiblePoses()); // Initial number of visible poses
  // Function to determine the initial number of visible poses based on screen width
  function getInitialVisiblePoses() {
    if (window.innerHeight < 768) {
      return 4; // You can set a different value for smaller screens if needed
    } else {
      return 8;
    }
  }
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

  // Update visiblePoses when the screen width changes
  useEffect(() => {
    function handleResize() {
      setVisiblePoses(getInitialVisiblePoses());
    }
    console.log(handleResize)
    window.addEventListener("resize", handleResize);
    window.addEventListener("load", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("load", handleResize);
    };
  }, []);

  const poseCards = poses.slice(0, visiblePoses).map((pose) => (
    <div
      className="group/card lg:w-[calc(100%/4-1.25rem)] md:w-[calc(100%/3-1.25rem)] sm:w-[calc(100%/2-1rem)]"
      key={pose.id}
    >
      <div className="bg-gray-100 w-full h-full md:m-0 shadow-md border border-gray-200 rounded-2xl dark:bg-gray-800 dark:border-gray-700 lg:hover:scale-[1.01]">
        <div onClick={() => openModal(pose)} className="cursor-pointer">
          <img
            className="px-8 py-5 rounded-t-2xl bg-accent card-hover:scale-105"
            src={pose.url_png}
            alt={pose.english_name}
          />
        </div>
        <div className="flex flex-col items-start p-5">
          <div onClick={() => openModal(pose)} className="cursor-pointer">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-gray-100">
              {pose.english_name}
            </h5>
          </div>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            {pose.sanskrit_name}
          </p>
          <button
            onClick={() => openModal(pose)}
            className="inline-flex items-center px-3 py-2 mt-auto text-sm font-medium text-center text-gray-100 bg-black rounded-lg group dark:bg-gray-900 dark:hover:bg-gray-700 dark:focus:ring-gray-900 focus:ring-4 focus:ring-primary-300"
          >
            Read more
            <ArrowRight
              className="ml-2 stroke-gray-100 dark:stroke-gray-50 group-hover:stroke-gray-100 group-hover:translate-x-1"
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
            className="inline-flex items-center px-4 py-2 text-lg font-medium text-center text-gray-700 bg-gray-100 border border-gray-200 rounded-lg shadow-md group dark:text-gray-100 hover:bg-gray-800 hover:text-gray-50 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-900 focus:ring-4 focus:ring-primary-300"
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
