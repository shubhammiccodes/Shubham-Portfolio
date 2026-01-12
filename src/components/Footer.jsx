import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-white border-t border-gray-100 py-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <p className="text-xs text-gray-400">
                    © {new Date().getFullYear()} Shubham. Built with <span className="text-red-500">❤️</span> using React & TailwindCSS.
                </p>
            </div>
        </footer>
    );
};

export default Footer;
