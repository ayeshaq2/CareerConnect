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
}