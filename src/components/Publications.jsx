
const publications = [
    "Neuroscientific Study with Hybrid Models Validation for Deception Detection — ETTIS 2024",
    "EEG Signal Analysis using Quantum Fourier Transform & Quantum ML — IOCRJ Journal",
    "Presented Multimodal Learning for Cognitive State Estimation at NCVPRIPG, IIST Thiruvananthapuram"
];

const Publications = () => {
    return (
        <section id="publications" className="py-16 bg-slate-50">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl font-extrabold text-center text-gray-900 sm:text-4xl mb-12">
                    Publications & Workshops
                </h2>
                <ul className="space-y-4">
                    {publications.map((pub, index) => (
                        <li key={index} className="flex items-start">
                            <span className="flex-shrink-0 h-2 w-2 mt-2.5 rounded-full bg-primary mr-4"></span>
                            <span className="text-gray-700 text-lg">{pub}</span>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
};

export default Publications;
