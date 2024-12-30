import React, { useState } from 'react';

interface PromptModalProps {
    isOpen: boolean;
    onClose: () => void;
    onSubmit: (answer: string) => void;
}

const PromptModal: React.FC<PromptModalProps> = ({ isOpen, onClose, onSubmit }) => {
    const [answer, setAnswer] = useState('');

    const handleSubmit = () => {
        onSubmit(answer);
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-white p-6 rounded-lg shadow-lg">
                <h2 className="text-2xl font-bold mb-4 text-secondary">Password là...</h2>
                <p className='text-gray'>2025</p>
                <input
                    type="text"
                    value={answer}
                    onChange={(e) => setAnswer(e.target.value)}
                    className="border p-2 w-full mb-4 text-black"
                />
                <div className="flex justify-end">
                    <button
                        onClick={onClose}
                        className="mr-4 px-4 py-2 bg-gray-500 text-white rounded-lg"
                    >
                        Cancel
                    </button>
                    <button
                        onClick={handleSubmit}
                        className="px-4 py-2 bg-blue-500 text-white rounded-lg"
                    >
                        Submit
                    </button>
                </div>
            </div>
        </div>
    );
};

export default PromptModal;