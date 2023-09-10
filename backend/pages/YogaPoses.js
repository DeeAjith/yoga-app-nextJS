// components/YogaPoses.js
import React from 'react';

const YogaPoses = () => {
  const yogaPoses = [
    'Pose 1: Downward-Facing Dog',
    'Pose 2: Tree Pose',
    'Pose 3: Warrior II',
    // Add more yoga poses here
  ];

  return (
    <div>
      <h2>Popular Yoga Poses</h2>
      <ul>
        {yogaPoses.map((pose, index) => (
          <li key={index}>{pose}</li>
        ))}
      </ul>
    </div>
  );
};

export default YogaPoses;
