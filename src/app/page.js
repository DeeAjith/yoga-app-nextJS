"use client";
import { useState, useEffect } from "react";
import styles from "../styles/home.module.scss";
import SearchBar from "./components/SearchBar";
import PoseList from "./components/PoseList";

export default function Home(props) {
  const [data, setData] = useState([]);

  // Function to fetch the data from the API
  async function fetchData() {
    try {
      const response = await fetch(process.env.YOGA_API || "http://localhost:8000/v1/poses");
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
    fetchAndSetData();
  }, []); // The empty dependency array ensures this runs once on mount

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
      <div className={`mt-20 ${styles.container}`}>
        <h1 className="mb-4 text-center text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
          Yoga Poses
        </h1>
        <p className="mb-6 text-center text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">
          Explore Tranquility: Yoga Poses for Balance and Wellness
        </p>
        
        <SearchBar searchTerm={searchTerm} onSearch={setSearchTerm} />
        {data ? (
          <PoseList poses={filteredPoses} />
        ) : (
          <p className={styles.noData}>No data found</p>
        )}
      </div>
    </div>
  );
}
