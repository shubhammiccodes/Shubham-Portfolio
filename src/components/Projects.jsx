import React from 'react';

const projects = [
    {
        title: 'AI-Powered Instructor Assistant',
        description: 'The AI-Powered Instructor Assistant is an application that uses Large Language Models (LLMs) and Natural Language Processing (NLP) to support instructors - especially in medical education. It analyzes student feedback and lecture transcripts to provide insights and detailed critiques, helping educators enhance teaching quality, content accuracy, and student engagement.',
        icon: '🎓',
        links: { demo: '#', github: '#' }
    },
    {
        title: 'Financial Report RAG System',
        description: 'Developed a retrieval-augmented generation pipeline for intelligent searching of financial reports using LangChain, HuggingFace models, and custom reranking strategies.',
        icon: '📊',
        links: { details: '#' }
    },
    {
        title: 'Generative AI Content Tool',
        description: 'Designed a GenAI solution for automated content generation for marketing teams using LLMs and prompt chaining workflows.',
        icon: '🤖',
        links: { details: '#' }
    },
    {
        title: 'EEG Signal Classification',
        description: 'Built a full ML pipeline for EEG data classification in Brain-Computer Interface tasks using Scikit-Learn and MNE.',
        icon: '🧠',
        links: { details: '#' }
    }
];

const Projects = () => {
    return (
        <section id="projects" className="py-16 bg-slate-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl font-extrabold text-center text-gray-900 sm:text-4xl mb-12">
                    Projects
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <div key={index} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300 flex flex-col h-full border border-gray-100">
                            <div className="flex items-center mb-4">
                                <span className="text-3xl mr-3">{project.icon}</span>
                                <h3 className="text-xl font-bold text-gray-900">{project.title}</h3>
                            </div>
                            <p className="text-gray-600 mb-6 flex-grow text-sm leading-relaxed">
                                {project.description}
                            </p>
                            <div className="flex space-x-4 mt-auto">
                                {project.links.demo && (
                                    <a href={project.links.demo} className="text-primary hover:text-blue-700 text-sm font-semibold">
                                        Live Demo
                                    </a>
                                )}
                                {project.links.github && (
                                    <a href={project.links.github} className="text-primary hover:text-blue-700 text-sm font-semibold">
                                        Github
                                    </a>
                                )}
                                {project.links.details && (
                                    <a href={project.links.details} className="text-primary hover:text-blue-700 text-sm font-semibold">
                                        View Details
                                    </a>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
