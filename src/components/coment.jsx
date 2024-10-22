import { useState, useEffect } from 'react';
import { createClient } from '@supabase/supabase-js';
import { useInView } from "react-intersection-observer";
import { FiSend } from 'react-icons/fi';
import { Meteors } from './ui/meteors';

// Initialize Supabase client
const supabaseUrl = "https://huaxafoidmoqshjkgkha.supabase.co";
const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imh1YXhhZm9pZG1vcXNoamtna2hhIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjkxMzcyNjMsImV4cCI6MjA0NDcxMzI2M30.3573qqSm1PMOY7nvfR65YuFBSCPSty-vmQhmq8eyVj4";
const supabase = createClient(supabaseUrl, supabaseAnonKey);

function Comment() {
    const [name, setName] = useState('');
    const [message, setMessage] = useState('');
    const [feedbackList, setFeedbackList] = useState([]);
    const { ref: contentRef, inView: isContentVisible } = useInView({
        triggerOnce: false,
        threshold: 0.1,
    });

    useEffect(() => {
        fetchFeedbackList();
    }, []);

    const fetchFeedbackList = async () => {
        try {
            const { data, error } = await supabase
                .from('feedback')
                .select('name, message, created_at')
                .order('created_at', { ascending: false });

            if (error) {
                console.error('Error fetching feedback:', error);
                return;
            }

            const formattedData = data.map(feedback => ({
                ...feedback,
                created_at: new Date(feedback.created_at).toLocaleDateString('en-US', {
                    weekday: 'long',
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                })
            }));

            setFeedbackList(formattedData);
        } catch (error) {
            console.error('Unexpected error fetching feedback:', error);
        }
    };

    const handleSubmit = async () => {
        if (name && message) {
            try {
                const createdAt = new Date().toISOString();

                const { data, error } = await supabase
                    .from('feedback')
                    .insert([{ name, message, created_at: createdAt }]);

                if (error) {
                    console.error('Error submitting feedback:', error);
                    return;
                }

                const formattedCreatedAt = new Date(createdAt).toLocaleDateString('en-US', {
                    weekday: 'long',
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                });

                setFeedbackList([{ name, message: message, created_at: formattedCreatedAt }, ...feedbackList]);

                setName('');
                setMessage('');
            } catch (error) {
                console.error('Unexpected error submitting feedback:', error);
            }
        }
    };

    return (
        <>
            <section
                ref={contentRef}
                className={`text-gray-600 body-font relative bg-gradient-to-r from-gray-100 via-gray-200 py-6 sm:py-4 transition-all duration-1000 ease-in-out transform ${isContentVisible
                    ? 'opacity-100 translate-y-0'
                    : 'opacity-0 translate-y-10'
                    }`}
            >
                <div className="container px-10 py-2 sm:py-5 mx-auto w-full sm:w-1/2">
                    <div className="flex flex-col text-center w-full mb-4">
                        <h1 className="sm:text-3xl text-3xl font-bold title-font mb-4 text-gray-900">Feedback</h1>
                        <p className="lg:w-2/3 mx-auto leading-relaxed text-base text-gray-700">
                            Feel free to share your comments or feedback for my portfolio.
                        </p>
                    </div>
                    <div className="lg:w-1/2 md:w-2/3 mx-auto">
                        <div className="flex flex-wrap -m-2">
                            <div className="p-2 w-full">
                                <div className="relative">
                                    <label htmlFor="name" className="leading-7 text-sm text-gray-600">Name</label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        placeholder='Feel free to use anonym'
                                        value={name}
                                        onChange={(e) => setName(e.target.value)}
                                        className="w-full bg-gray-100 bg-opacity-50 rounded-lg border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-3 px-4 transition-colors duration-200 ease-in-out"
                                    />
                                </div>
                            </div>
                            <div className="p-2 w-full">
                                <div className="relative">
                                    <label htmlFor="message" className="leading-7 text-sm text-gray-600">Message</label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        placeholder='Your message'
                                        value={message}
                                        onChange={(e) => setMessage(e.target.value)}
                                        className="w-full bg-gray-100 bg-opacity-50 rounded-lg border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-3 px-4 resize-none transition-colors duration-200 ease-in-out"
                                    />
                                </div>
                            </div>
                            {/* <div className="p-2 w-full">
                            <button
                                onClick={handleSubmit}
                                className="flex mx-auto text-white bg-indigo-500 border-0 py-3 px-8 focus:outline-none hover:bg-indigo-600 rounded-lg text-lg transition-all duration-300 ease-in-out transform hover:scale-105"
                            >
                            <FiSend className="ml-2" />
                                Send
                            </button>
                        </div> */}
                            <div className="p-2 w-full">
                                <button
                                    onClick={handleSubmit}
                                    className="flex items-center justify-center mx-auto text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded-lg text-lg transition duration-300 ease-in-out transform hover:scale-105">
                                    Send <FiSend className="ml-2" />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container px-7 mx-auto w-full  py-8 sm:py-8">
                    <h3 className="text-2xl font-semibold text-gray-800 mb-4 ">Comments</h3>
                    <div className="flex space-x-4 overflow-x-auto"> {/* Added overflow-x-auto */}
                        {feedbackList.length > 0 ? (
                            feedbackList.map((feedback, index) => (
                                <div className='md:w-96 flex-shrink-0' key={index}> {/* Added flex-shrink-0 to prevent shrinking */}
                                    <div className="w-full relative max-w-2xl">
                                        <div className="absolute inset-0 h-full w-full bg-gradient-to-r from-blue-500 to-teal-500 transform scale-[0.80] bg-red-500 rounded-full blur-3xl" />
                                        <div className="relative shadow-xl bg-gray-900 border border-gray-800 px-4 py-4 h-full overflow-hidden rounded-lg flex flex-col justify-end items-start">
                                            <h1 className="font-bold text-xl text-white mb-4 relative z-50">
                                                {feedback.name}
                                            </h1>
                                            <p className="font-normal text-base text-slate-400 mb-4 relative z-50">
                                                {feedback.message}
                                            </p>
                                            <p className="font-normal text-base text-gray-300 mb-1 relative z-50">
                                                {feedback.created_at}
                                            </p>
                                            {/* Meaty part - Meteor effect */}
                                            <Meteors number={20} />
                                        </div>
                                    </div>
                                </div>
                            ))
                        ) : (
                            <p className="text-gray-600">No feedback yet.</p>
                        )}
                    </div>


                </div>
            </section>

        </>

    );
}

export default Comment;
