// page.js
"use client"
import React, { useState } from 'react';

export default function Page() {
    const [duration, setDuration] = useState('');
    const [location, setLocation] = useState('');
    const [field, setField] = useState('');
    const [otherDuration, setOtherDuration] = useState('');
    const [otherLocation, setOtherLocation] = useState('');
    const [otherField, setOtherField] = useState('');

    const durationOptions = ['Short-term', 'Long-term', 'Summer', 'Winter', 'Spring', 'Fall', 'Part-time', 'Full-time', 'Other'];
    const locationOptions = ['New York', 'San Francisco', 'London', 'Berlin', 'Los Angeles', 'Toronto', 'Chicago', 'Other'];
    const fieldOptions = ['Technology', 'Finance', 'Healthcare', 'Education', 'Marketing', 'Engineering', 'Design', 'Other'];

    return (
        <div className="p-8 min-h-screen bg-[#E2F0C3] flex items-center justify-center">
            <div className="max-w-md w-full bg-gray-50 rounded-lg border border-gray-200 shadow-md p-6">
                <h1 className="text-2xl font-bold mb-4 text-center text-gray-800">Internship Search</h1>
                <form className="space-y-5">
                    <div>
                        <label className="block mb-2 text-lg font-medium text-gray-700" htmlFor="duration">Duration:</label>
                        <select id="duration" value={duration} onChange={(e) => setDuration(e.target.value)} className="block w-full p-2 border border-gray-300 rounded-md text-sm text-gray-500">
                            {durationOptions.map(option => (
                                <option key={option} value={option}>{option}</option>
                            ))}
                        </select>
                        {duration === 'Other' && (
                            <input type="text" placeholder="Specify duration" value={otherDuration} onChange={(e) => setOtherDuration(e.target.value)} className="block w-full p-2 mt-2 border border-gray-300 rounded-md text-sm text-gray-500" />
                        )}
                    </div>
                    <div>
                        <label className="block mb-2 text-lg font-medium text-gray-700" htmlFor="location">Location:</label>
                        <select id="location" value={location} onChange={(e) => setLocation(e.target.value)} className="block w-full p-2 border border-gray-300 rounded-md text-sm text-gray-500">
                            {locationOptions.map(option => (
                                <option key={option} value={option}>{option}</option>
                            ))}
                        </select>
                        {location === 'Other' && (
                            <input type="text" placeholder="Specify location" value={otherLocation} onChange={(e) => setOtherLocation(e.target.value)} className="block w-full p-2 mt-2 border border-gray-300 rounded-md text-sm text-gray-500" />
                        )}
                    </div>
                    <div>
                        <label className="block mb-2 text-lg font-medium text-gray-700" htmlFor="field">Field:</label>
                        <select id="field" value={field} onChange={(e) => setField(e.target.value)} className="block w-full p-2 border border-gray-300 rounded-md text-sm text-gray-500">
                            {fieldOptions.map(option => (
                                <option key={option} value={option}>{option}</option>
                            ))}
                        </select>
                        {field === 'Other' && (
                            <input type="text" placeholder="Specify field" value={otherField} onChange={(e) => setOtherField(e.target.value)} className="block w-full p-2 mt-2 border border-gray-300 rounded-md text-sm text-gray-500" />
                        )}
                    </div>
                    <button type="submit" className="w-full bg-[#E2F0C3] hover:bg-[#cde5b6] text-gray-800 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" onClick={() => {/* Implement search functionality here */}}>
                        Search
                    </button>
                </form>
            </div>
        </div>
    );
}
