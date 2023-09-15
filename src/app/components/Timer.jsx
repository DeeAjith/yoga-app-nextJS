import React, { useState, useEffect } from "react";
import { Play, RefreshCcw } from "react-feather";

const Timer = ({ initialTime, onTimerComplete }) => {
    const [time, setTime] = useState(initialTime);
    const [isActive, setIsActive] = useState(false);

    useEffect(() => {
        let interval;

        if (isActive && time > 0) {
            interval = setInterval(() => {
                setTime((prevTime) => prevTime - 1);
            }, 1000);
        } else if (time === 0) {
            onTimerComplete();
        }

        return () => clearInterval(interval);
    }, [isActive, time]);

    const handleStart = () => {
        setIsActive(true);
    };

    const handleReset = () => {
        setIsActive(false);
        setTime(initialTime);
    };

    return (
        <div className="text-center">
            <div className="flex items-center justify-center space-x-2">
                <input
                    className="bg-gray-100 dark:bg-gray-800 dark:border-gray-700 text-gray-800 dark:text-gray-50 border rounded px-2 py-1 w-20 text-center"
                    type="number"
                    value={Math.floor(time / 3600)}
                    onChange={(e) => setTime(e.target.value * 3600)}
                />
                <span className="text-gray-500">h</span>
                <input
                    className="bg-gray-100 dark:bg-gray-800 dark:border-gray-700 text-gray-800 dark:text-gray-50 border rounded px-2 py-1 w-20 text-center"
                    type="number"
                    value={Math.floor((time % 3600) / 60)}
                    onChange={(e) => setTime(e.target.value * 60)}
                />
                <span className="text-gray-500">m</span>
                <input
                    className="bg-gray-100 dark:bg-gray-800 dark:border-gray-700 text-gray-800 dark:text-gray-50 border rounded px-2 py-1 w-20 text-center"
                    type="number"
                    value={time % 60}
                    onChange={(e) => setTime(e.target.value)}
                />
                <span className="text-gray-500">s</span>
            </div>
            <div className="mt-2 flex gap-2 justify-center">
                <button
                    className="aspect-square rounded-full mt-auto text-gray-100 bg-black dark:bg-gray-900 dark:hover:bg-gray-700 dark:focus:ring-gray-900 focus:ring-4 focus:ring-primary-300 font-medium text-sm px-3 py-2 text-center inline-flex items-center"
                    onClick={handleStart}
                >
                    <Play fill className="stroke-gray-400 fill-gray-400" />
                </button>
                <button
                    className="aspect-square rounded-full mt-auto text-gray-100 bg-black dark:bg-gray-900 dark:hover:bg-gray-700 dark:focus:ring-gray-900 focus:ring-4 focus:ring-primary-300 font-medium text-sm px-3 py-2 text-center inline-flex items-center"
                    onClick={handleReset}
                >
                    <RefreshCcw className="stroke-gray-400" />
                </button>
            </div>
        </div>
    );
};

export default Timer;
