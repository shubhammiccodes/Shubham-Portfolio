import React from 'react';

const Contact = () => {
    return (
        <section id="contact" className="py-20 bg-white text-center">
            <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl mb-6">
                    Get in Touch
                </h2>
                <p className="text-lg text-gray-600 mb-8">
                    I'm open to collaborations, consulting, and interesting AI projects.
                </p>
                <div className="flex flex-col items-center space-y-4">
                    <a href="mailto:shubhammic.nextgendev@gmail.com" className="text-primary font-semibold hover:underline text-lg flex items-center">
                        ✉️ shubhammic.nextgendev@gmail.com
                    </a>
                    <div className="flex space-x-6">
                        <a href="https://www.linkedin.com/in/shubham-fullstackdev/" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-primary transition-colors">LinkedIn</a>
                        <span className="text-gray-300">|</span>
                        <a href="https://github.com/shubhammiccodes" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-primary transition-colors">Github</a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
