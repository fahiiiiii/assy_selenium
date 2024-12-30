"use client";
import React, { useState } from 'react';

const faqData = [
    {
        question: "Is Juneau Vacation Home: Stunning View + Beach Access pet-friendly?",
        answer: "Yes, it is pet-friendly."
    },
    {
        question: "What time is check-in at Juneau Vacation Home: Stunning View + Beach Access?",
        answer: "Check-in is at 3 PM."
    },
    {
        question: "What time is check-out at Juneau Vacation Home: Stunning View + Beach Access?",
        answer: "Check-out is at 11 AM."
    },
    {
        question: "Where is Juneau Vacation Home: Stunning View + Beach Access located?",
        answer: "It is located in Juneau, Alaska."
    }
];

const FAQItem = ({ question, answer }: { question: string; answer: string }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleOpen = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="border-b last:border-b-0 py-4">
            <div className="flex items-center cursor-pointer" onClick={toggleOpen}>
                <div className="icon w-5 h-5 flex items-center justify-center text-gray-800">
                    <i className={`bx bxs-chevron-down transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}></i>
                </div>
                <div className="faq-question text-lg text-gray-800 ml-3">{question}</div>
            </div>
            {isOpen && (
                <p className="mt-2 text-gray-600">{answer}</p>
            )}
        </div>
    );
};

const FAQ: React.FC = () => {
    return (
        <div className="max-w-2xl mx-auto p-5 font-sans">
            <h2 className="text-2xl font-semibold text-gray-700 mb-6">Frequently asked questions</h2>
            <div className="faq-list flex flex-col gap-4">
                {faqData.map((item, index) => (
                    <FAQItem key={index} question={item.question} answer={item.answer} />
                ))}
            </div>
        </div>
    );
};

export default FAQ;