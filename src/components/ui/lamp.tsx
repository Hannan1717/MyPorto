import React, { useState } from "react";
import { motion } from "framer-motion";
import { cn } from "../../lib/utils";
import { GoogleGenerativeAI } from "@google/generative-ai";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { FaPaperPlane, FaSpinner } from 'react-icons/fa';
import { Meteors } from '../ui/meteors';
import ReactMarkdown from "react-markdown";
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { solarizedlight } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { atomDark } from "react-syntax-highlighter/dist/esm/styles/prism";
// const geminiApiKey = process.env.VITE_GEMINI_API_KEY;
// if (!geminiApiKey) {
//     throw new Error("VITE_GEMINI_API_KEY is not defined.");
// }
// console.log(geminiApiKey);
const genAI = new GoogleGenerativeAI("AIzaSyClUvRSEspiwKPm9ZGcnZiHsQU-9tfJDag");
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });



export function LampDemo() {
    const [prompt, setPrompt] = useState("");
    const [response, setResponse] = useState("");
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (event) => {
        event.preventDefault();
        if (!prompt) return;

        setLoading(true); // Set loading to true when submitting

        try {
            const result = await model.generateContent(prompt);
            setResponse(result.response.text()); // Set the AI response here
        } catch (error) {
            console.error("Error generating AI content:", error);
            setResponse("An error occurred while generating content.");
        } finally {
            setLoading(false); // Reset loading state after response is received or an error occurs
        }
    };

    return (
        <LampContainer>
            <motion.h1
                initial={{ opacity: 0.5, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                    delay: 0.3,
                    duration: 0.8,
                    ease: "easeInOut",
                }}
                className="mt-8 bg-gradient-to-br from-slate-300 to-slate-500 py-4 bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-7xl"
            >
                My AI
            </motion.h1>

            <form className="my-8 flex items-center space-x-2 w-full max-w-2xl" onSubmit={handleSubmit}>
                <LabelInputContainer className="flex-1 w-full">
                    <Input
                        value={prompt}
                        onChange={(e) => setPrompt(e.target.value)}
                        id="prompt"
                        placeholder="Enter your prompt here"
                        type="text"
                        className="w-full"
                    />
                </LabelInputContainer>

                <button
                    type="submit"
                    className="flex items-center justify-center bg-gradient-to-br from-black to-neutral-600 text-white rounded-md p-2 shadow-md transition-transform transform hover:scale-105"
                    disabled={loading} // Disable button while loading
                >
                    {loading ? (
                        <FaSpinner size={20} className="animate-spin" /> // Show loading spinner
                    ) : (
                        <FaPaperPlane size={20} /> // Show airplane icon
                    )}
                </button>
            </form>

            <div className="mt-9 flex justify-center overflow-auto max-h-72 w-full">
                <div className="md:w-full flex-shrink-0 w-full max-w-2xl">
                    <div className="w-full relative">
                        <div className="absolute inset-0 h-full w-full bg-gradient-to-r from-blue-500 to-teal-500 transform scale-[0.80] rounded-full blur-3xl" />
                        <div className="relative shadow-xl bg-gray-900 border border-gray-800 px-4 py-4 h-full overflow-hidden rounded-lg flex flex-col justify-end items-start w-full">
                            {response ? (
                                <div className="overflow-y-auto max-h-60 custom-scroll w-full">
                                    <ReactMarkdown
                                        className="font-normal text-slate-400 mb-4 relative z-50 break-words w-full"
                                        components={{
                                            code: ({ node, inline, className, children }) => {
                                                const match = /language-(\w+)/.exec(className || '');
                                                return inline ? (
                                                    <code className="text-red-400">{children}</code> // Darker inline code color
                                                ) : (
                                                    <CodeBlock language={match ? match[1] : ''} value={String(children).replace(/\n$/, '')} />
                                                );
                                            }
                                        }}
                                    >
                                        {response}
                                    </ReactMarkdown>
                                </div>
                            ) : (
                                <p className="font-normal text-base text-slate-400 mb-4 relative z-50">The AI response will appear here.</p>
                            )}
                            <Meteors number={5} />
                        </div>
                    </div>
                </div>
            </div>

        </LampContainer>
    );
}

export const LampContainer = ({
    children,
    className
}) => {
    return (
        <div
            style={{ height: 1200 }}
            className={cn(
                "relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-slate-950 w-full z-0",
                className
            )}
        >
            <div
                className="relative flex w-full flex-1 scale-y-125 items-center justify-center isolate z-0"
            >
                <motion.div
                    initial={{ opacity: 0.5, width: "15rem" }}
                    whileInView={{ opacity: 1, width: "30rem" }}
                    transition={{
                        delay: 0.3,
                        duration: 0.8,
                        ease: "easeInOut",
                    }}
                    style={{
                        backgroundImage: `conic-gradient(var(--conic-position), var(--tw-gradient-stops))`,
                    }}
                    className="absolute inset-auto right-1/2 h-56 overflow-visible w-[30rem] bg-gradient-conic from-cyan-500 via-transparent to-transparent text-white [--conic-position:from_70deg_at_center_top]"
                >
                    <div
                        className="absolute w-full left-0 bg-slate-950 h-40 bottom-0 z-20 [mask-image:linear-gradient(to_top,white,transparent)]"
                    />
                    <div
                        className="absolute w-40 h-full left-0 bg-slate-950 bottom-0 z-20 [mask-image:linear-gradient(to_right,white,transparent)]"
                    />
                </motion.div>
                <motion.div
                    initial={{ opacity: 0.5, width: "15rem" }}
                    whileInView={{ opacity: 1, width: "30rem" }}
                    transition={{
                        delay: 0.3,
                        duration: 0.8,
                        ease: "easeInOut",
                    }}
                    style={{
                        backgroundImage: `conic-gradient(var(--conic-position), var(--tw-gradient-stops))`,
                    }}
                    className="absolute inset-auto left-1/2 h-56 w-[30rem] bg-gradient-conic from-transparent via-transparent to-cyan-500 text-white [--conic-position:from_290deg_at_center_top]"
                >
                    <div
                        className="absolute w-40 h-full right-0 bg-slate-950 bottom-0 z-20 [mask-image:linear-gradient(to_left,white,transparent)]"
                    />
                    <div
                        className="absolute w-full right-0 bg-slate-950 h-40 bottom-0 z-20 [mask-image:linear-gradient(to_top,white,transparent)]"
                    />
                </motion.div>
                <div
                    className="absolute top-1/2 h-48 w-full translate-y-12 scale-x-150 bg-slate-950 blur-2xl"
                ></div>
                <div
                    className="absolute top-1/2 z-50 h-48 w-full bg-transparent opacity-10 backdrop-blur-md"
                ></div>
                <div
                    className="absolute inset-auto z-50 h-36 w-[28rem] -translate-y-1/2 rounded-full bg-cyan-500 opacity-50 blur-3xl"
                ></div>
                <motion.div
                    initial={{ width: "8rem" }}
                    whileInView={{ width: "16rem" }}
                    transition={{
                        delay: 0.3,
                        duration: 0.8,
                        ease: "easeInOut",
                    }}
                    className="absolute inset-auto z-30 h-36 w-64 -translate-y-[6rem] rounded-full bg-cyan-400 blur-2xl"
                ></motion.div>
                <motion.div
                    initial={{ width: "15rem" }}
                    whileInView={{ width: "30rem" }}
                    transition={{
                        delay: 0.3,
                        duration: 0.8,
                        ease: "easeInOut",
                    }}
                    className="absolute inset-auto z-50 h-0.5 w-[30rem] -translate-y-[7rem] bg-cyan-400"
                ></motion.div>

                <div
                    className="absolute inset-auto z-40 h-44 w-full -translate-y-[12.5rem] bg-slate-950"
                ></div>
            </div>
            <div className="relative z-50 flex -translate-y-80 flex-col items-center px-5 w-full lg:px-40">
                {children}
            </div>
        </div>
    );
};


const BottomGradient = () => {
    return (
        <>
            <span className="group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
            <span className="group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
        </>
    );
};

const LabelInputContainer = ({
    children,
    className,
}: {
    children: React.ReactNode;
    className?: string;
}) => {
    return (
        <div className={cn("flex flex-col space-y-2 w-full", className)}>
            {children}
        </div>
    );
};

const CodeBlock = ({ language, value }) => {
    return (
        <SyntaxHighlighter
            style={atomDark} // You may want to use a darker theme like 'dark' for a dark mode effect
            language={language}
            PreTag="div"
            showLineNumbers={true}
            customStyle={{
                borderRadius: '0.5rem',
                margin: '1rem 0',
                padding: '1rem',
                backgroundColor: '#1e1e1e', // Dark background for code block
                color: '#ffcccc', // Light text color for code block
            }}
        >
            {value}
        </SyntaxHighlighter>
    );
};