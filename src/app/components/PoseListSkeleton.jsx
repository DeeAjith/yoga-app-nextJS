import React from "react";

const ShimmerCard = () => {
  return (
    <div
      className={`w-full lg:w-[calc(100%/4-1.25rem)] md:w-[calc(100%/3-1.25rem)] sm:w-[calc(100%/2-1rem)]`}
    >
      <div className={`animate-pulse bg-white w-full h-full md:m-0 shadow-md border border-gray-200 rounded-2xl dark:bg-gray-800 dark:border-gray-700`}>
        <div className={`bg-gray-300 dark:bg-gray-700 rounded-t-lg w-full h-[320px]`}></div>
        <div className={`p-5 flex flex-col items-start`}>
          <div className={`bg-gray-300 dark:bg-gray-700 rounded-lg w-20 h-3`}></div>
          <div className={`bg-gray-300 dark:bg-gray-700 rounded-lg lg:w-44 md:w-32 w-44 h-2 mt-4`}></div>
          <div className={`bg-gray-300 dark:bg-gray-700 rounded-lg lg:w-36 md:w-24 w-36 h-2 mt-2`}></div>
          <div className={`bg-gray-300 dark:bg-gray-700 rounded-lg w-40 h-8 mt-4`}></div>
        </div>
      </div>
    </div>
  );
};

const PoseListSkeleton = ({ cardCount }) => {
  const shimmerCards = Array.from({ length: cardCount }).map((_, index) => (
    <ShimmerCard key={index} />
  ));

  return (
    <div className={`flex flex-row flex-wrap justify-center gap-5 mb-20`}>
      {shimmerCards}
    </div>
  );
};

export default PoseListSkeleton;