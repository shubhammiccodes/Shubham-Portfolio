import React from 'react';

const experiences = [
    {
        role: 'Data Scientist',
        company: 'Accenture',
        period: '2024–Present',
        description: 'Developing generative AI and retrieval augmented solutions for enterprise content creation and document intelligence.'
    },
    {
        role: 'Data Scientist',
        company: 'NielsenIQ',
        period: '2024–Present',
        description: 'Developing generative AI and retrieval augmented solutions for enterprise content creation and document intelligence.'
    },
    {
        role: 'Project Engineer',
        company: 'CDAC, Delhi',
        period: '2022–2024',
        description: 'Worked on HCI signal processing, synthetic data generation, and RAG systems using LLMware and ChromaDB.'
    },
    {
        role: 'Python & AI Developer',
        company: 'Indus Valley Partners, Noida',
        period: '2021–2022',
        description: 'Developed NLP and OCR pipelines for automating financial reporting using Azure Cognitive Services.'
    }
];

const Experience = () => {
    return (
        <section id="experience" className="py-16 bg-white">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl font-bold text-center text-gray-900 sm:text-4xl mb-12">
                    Experience
                </h2>
                <div className="space-y-12">
                    {experiences.map((exp, index) => (
                        <div key={index} className="relative pb-8">
                            {/* Line connector if needed, for now just simple list */}
                            <div className="md:flex md:justify-between items-baseline mb-2">
                                <h3 className="text-xl font-bold text-gray-900">
                                    {exp.role} <span className="text-gray-500 font-normal">— {exp.company}</span>
                                </h3>
                                <span className="text-sm font-semibold text-gray-500 uppercase tracking-wide">
                                    {exp.period}
                                </span>
                            </div>
                            <p className="text-gray-600 max-w-2xl">
                                {exp.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience;
