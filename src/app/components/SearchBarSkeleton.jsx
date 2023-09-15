import React from 'react'
import { Search } from 'react-feather';

const SearchBarSkeleton = () => {
    return (
        <>
            <div className="animate-pulse mb-5">
                <div className={`relative bg-gray-300 dark:bg-gray-800 rounded-lg w-full h-10 mt-4`}>
                    <span className="absolute inset-y-0 left-0 flex items-center pl-2">
                        <Search strokeWidth={5} fill size={18} className="stroke-gray-100 fill-gray-100 dark:stroke-gray-700 dark:fill-gray-700 rounded-sm w-5 h-5" />
                    </span>
                </div>
            </div>
        </>
    )
}

export default SearchBarSkeleton;