import React from 'react';
import { useState } from 'react';
const Question = () => {
    const [formSubmit, setFormSubmit] = useState(false);
    const [showButton, setShowButton] = useState(false);
    const handleInputClick = () => {
        setShowButton(true);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setFormSubmit(true);
    };

    return (
        <div className="w-full flex p-4 border border-gray-300 shadow-md rounded-lg bg-[#ffeaaa]">
            <div className="md:w-1/2 flex flex-col space-y-2">
                <h1
                    className="font-medium text-xl flex items-center gap-1 "
                    id="deals"
                >
                    Have a question about Tyres?
                </h1>
                <p className="text-gray-500">
                    Get an answer in 24 hours from our experts.
                </p>

                {formSubmit ? (
                    <h3 className="">
                        Thankyou for asking question, we will review and provide
                        you an expert answer.
                    </h3>
                ) : (
                    <form onSubmit={handleSubmit} className="flex gap-2">
                        <input
                            type="text"
                            className="px-4 py-2 w-10/12 rounded-full border-2 border-[#d9bc67] outline-none"
                            placeholder="Ask or search your question"
                            onClick={handleInputClick}
                        />
                        {showButton && (
                            <button
                                className="text-white bg-red-600 px-4 rounded-md "
                                type="submit"
                            >
                                Ask
                            </button>
                        )}
                    </form>
                )}
            </div>
            <div className="w-1/2 flex justify-center md:items-center">
                <div className="">
                    <img
                        src="https://cdn.tyreplex.net/themes/moonlight/images/haveQuestion-bg.png?v=600&tr=q-60"
                        alt=""
                        className="w-20"
                    />
                </div>
            </div>
        </div>
    );
};

export default Question;
