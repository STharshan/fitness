import React from "react";
import { BiBullseye } from "react-icons/bi";
// Importing React Icons
import { FaDumbbell, FaMedal, FaRunning, FaFlagUsa, FaTrophy } from 'react-icons/fa';
import { GoTrophy } from "react-icons/go";
import { LuUsers } from "react-icons/lu";
import { PiMedal } from "react-icons/pi";

const ProvenTrackRecord = () => {
    // Data for each section
    const records = [
        {
            id: 1,
            title: "Multiple British Powerlifting Records",
            description: "BPF & other federations",
            icon: <GoTrophy className="text-4xl text-orange-500" />,
        },
        {
            id: 2,
            title: "4th at British OCR Championships",
            description: "Age Group category",
            icon: <PiMedal className="text-4xl text-orange-500" />,
        },
        {
            id: 3,
            title: "Multiple Spartan Race Podiums",
            description: "Consistent top finisher",
            icon: <GoTrophy className="text-4xl text-orange-500" />,
        },
        {
            id: 4,
            title: "Great Britain Representative",
            description: "OCR European Championships, Portugal 2024",
            icon: <LuUsers className="text-4xl text-orange-500" />,
        },
        {
            id: 5,
            title: "World Championship Competitor",
            description: "WPU Worlds, Ireland 2015",
            icon: <PiMedal className="text-4xl text-orange-500" />,
        },
        {
            id: 6,
            title: "Strength & Conditioning Specialist",
            description: "British & European Championship Athlete",
            icon: <BiBullseye className="text-4xl text-orange-500" />,
        },
    ];

    return (
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 mb-15">
            <h2 className="text-3xl font-semibold text-center mb-8">Personally things I've achieved</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {records.map((record) => (
                    <div key={record.id} className="bg-white p-5 rounded-lg shadow-md text-center">
                        <div className="mb-4">
                            <div className="bg-orange-200 p-3 rounded-full inline-block">
                                {record.icon} {/* Render icon dynamically */}
                            </div>
                        </div>
                        <h3 className="text-xl font-semibold mb-2">{record.title}</h3>
                        <p className="text-sm text-gray-500">{record.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ProvenTrackRecord;
