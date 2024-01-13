'use client'

import { useState } from 'react';

export default function Home() {
  const [resume, setResume] = useState(null);
  const [jobDescription, setJobDescription] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState('');
  
  const handleResumeChange = (event) => {
    setResume(event.target.files[0]);
  };

  const handleJobDescriptionChange = (event) => {
    setJobDescription(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);
    setMessage('');

    console.log('Resume:', resume);
    console.log('Job Description:', jobDescription);

    try {
      await new Promise((resolve) => setTimeout(resolve, 2000));
      setMessage('Cover letter generated successfully!');
    } catch (error) {
      setMessage('Error generating cover letter.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="p-8 min-h-screen bg-white flex items-center justify-center">
      <div className="max-w-md w-full bg-gray-50 rounded-lg border border-gray-200 shadow-md p-6">
        <h1 className="text-2xl font-bold mb-4 text-center text-gray-800">Cover Letter Generator</h1>
        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block mb-2 text-lg font-medium text-gray-700" htmlFor="resume">Upload Your Resume</label>
            <input type="file" id="resume" onChange={handleResumeChange} className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-[#E2F0C3] file:text-gray-700 hover:file:bg-[#cde5b6]" />
          </div>
          <div>
            <label className="block mb-2 text-lg font-medium text-gray-700" htmlFor="job-description">Job Description</label>
            <textarea id="job-description" rows="4" onChange={handleJobDescriptionChange} className="block w-full p-2.5 text-sm text-gray-900 bg-white border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"></textarea>
          </div>
          <button type="submit" className="w-full bg-[#E2F0C3] hover:bg-[#cde5b6] text-gray-800 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" disabled={isSubmitting}>
            {isSubmitting ? 'Generating...' : 'Generate Cover Letter'}
          </button>
        </form>
        {message && <p className="mt-4 text-center text-sm font-medium text-gray-700">{message}</p>}
      </div>
    </div>
  );
}