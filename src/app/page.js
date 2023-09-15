"use client";
import React, { useState, useEffect } from "react";
import styles from "@/styles/home.module.scss";
import SearchBar from "./components/SearchBar";
import PoseList from "./components/PoseList";
import PoseListSkeleton from "./components/PoseListSkeleton"; // Import your PoseListSkeleton component
import { Database, Search } from "react-feather";
import { ClipLoader } from "react-spinners";
import SearchBarSkeleton from "./components/SearchBarSkeleton";

export default function Home(props) {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true); // Add loading state

  // Function to fetch the data from the API
  async function fetchData() {
    try {
      const response = await fetch("https://yoga-api-nzy4.onrender.com/v1/poses" || "http://localhost:8000/v1/poses");
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Error fetching data:", error);
      return [];
    }
  }

  // Function to fetch and set the data
  async function fetchAndSetData() {
    const refreshedData = await fetchData();
    setData(refreshedData);
  }

  // Load the data when the component initially mounts
  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(
          "https://yoga-api-nzy4.onrender.com/v1/poses" ||
          "http://localhost:8000/v1/poses"
        );
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        setData(data);
        setIsLoading(false); // Set loading to false when data is fetched
      } catch (error) {
        console.error("Error fetching data:", error);
        setData([]);
        setIsLoading(false); // Set loading to false on error
      }
    }

    fetchData();
  }, []);

  const [searchTerm, setSearchTerm] = useState("");

  const filteredPoses = data
    ? data.filter(
      (pose) =>
        pose?.english_name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        pose?.sanskrit_name_adapted
          .toLowerCase()
          .includes(searchTerm.toLowerCase()) ||
        pose?.sanskrit_name
          .toLowerCase()
          .includes(searchTerm.toLowerCase()) ||
        pose?.translation_name
          .toLowerCase()
          .includes(searchTerm.toLowerCase())
    )
    : [];

  return (
    <div className={styles.App}>
      <div className={`mt-10 ${styles.container}`}>
        <div className="flex gap-5 items-center justify-center mb-3">
          {isLoading ? <div className="animate-pulse w-full flex justify-center">
            <div className="bg-gray-400 dark:bg-gray-800 rounded-lg w-44 h-3"></div>
          </div>
            : <h1 className="mb-4 text-center text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-gray-100">
              Yoga Poses
            </h1>
          }
        </div>
        {isLoading ? <div className="animate-pulse w-full flex justify-center mb-6">
          <div className="bg-gray-400 dark:bg-gray-800 rounded-lg w-60 h-2"></div>
        </div>
          : <p className="mb-6 text-center text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">
            Explore Tranquility: Yoga Poses for Balance and Wellness
          </p>}
        {isLoading ? ( // Render shimmer skeletons while data is loading
          <>
            <SearchBarSkeleton />
            <PoseListSkeleton cardCount={4} />
          </>
        ) : (
          <>
            <SearchBar searchTerm={searchTerm} onSearch={setSearchTerm} />
            {data ? (
              <PoseList poses={filteredPoses} fetchAndSetData={fetchAndSetData} />
            ) : (
              <div className="flex w-full items-center">
                <p className="bg-slate-200 p-5 rounded-[5px] text-gray-500 dark:bg-gray-800 dark:text-gray-400 inline-flex items-center gap-2 mx-auto justify-center">No data found <span><Database size={18} className="stroke-gray-500 dark:stroke-gray-400" /></span></p>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
}
