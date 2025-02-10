import React from "react";
import { Link } from "react-router-dom";
import { Home, Briefcase, Mail } from 'lucide-react';

const iconMap = {
    home: Home,
    briefcase: Briefcase,
    mail: Mail
};

const NavbarItem = ({ label, path, icon, isActive, isLogo }) => {
    const Icon = icon ? iconMap[icon] : null;

    const handleClick = (e) => {
        if (path === '/projects') {
            e.preventDefault();
            const projectsSection = document.getElementById('projects');
            if (projectsSection) {
                projectsSection.scrollIntoView({ behavior: 'smooth' });
            }
        }
    };
    
    if (isLogo) {
        return (
            <Link
                to={path}
                className="group relative text-xl md:text-2xl font-serif font-medium text-gray-900 transition-colors duration-300"
            >
                <span className="relative inline-block transition-transform duration-300 group-hover:-translate-y-1">
                    {label.split('').map((char, index) => (
                        <span
                            key={index}
                            className="inline-block transition-transform duration-300 hover:text-blue-600"
                            style={{
                                transitionDelay: `${index * 30}ms`,
                                transform: 'translateY(0)',
                            }}
                        >
                            {char}
                        </span>
                    ))}
                </span>
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-600 transform origin-left scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>
            </Link>
        );
    }

    return (
        <Link
            to={path}
            className={`flex items-center px-3 py-2 text-sm font-medium rounded-lg transition-colors
                ${isActive 
                    ? 'text-blue-600 bg-blue-50' 
                    : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50'
                }
                ${icon ? 'space-x-2' : ''}`}
        >
            {Icon && <Icon className="w-5 h-5" />}
            <span>{label}</span>
        </Link>
    );
};

export default NavbarItem;