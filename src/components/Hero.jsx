import shubhamProfile from '../assets/shubham_Profile.webp';
import resumePdf from '../assets/Shubham_Sr_FullStack_GenAI_ServingNotice_5YOE_01_2026.pdf';

const Hero = () => {
    // Using imported local image
    const profileImage = shubhamProfile;

    return (
        <section id="hero" className="bg-slate-50 py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <div className="relative inline-block">
                    <div className="p-1 rounded-full bg-gradient-to-tr from-blue-400 to-blue-600">
                        <img
                            className="h-40 w-40 rounded-full border-4 border-white object-cover mx-auto"
                            src={profileImage}
                            alt="Shubham"
                        />
                    </div>
                </div>
                <h1 className="mt-6 text-4xl font-bold text-gray-900 sm:text-5xl md:text-6xl tracking-tight">
                    Shubham
                </h1>
                <p className="mt-2 text-xl text-primary font-semibold">
                    Data Scientist | Generative AI | LLMs | NLP | RAG Systems
                </p>
                <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-600">
                    Experienced in Natural Language Processing, Generative AI, and intelligent information retrieval systems. I love solving complex problems through data, algorithms, and thoughtful design.
                </p>
                <div className="mt-8 flex justify-center gap-4">
                    <a
                        href="#projects"
                        className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-primary hover:bg-blue-700 transition-colors duration-200"
                    >
                        View Projects
                    </a>
                    <a
                        href={resumePdf}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center px-6 py-3 border border-gray-300 shadow-sm text-base font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 transition-colors duration-200"
                    >
                        Download Resume
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Hero;
