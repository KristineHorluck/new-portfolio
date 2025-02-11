import React from "react";
import { Link as RouterLink } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";
import { Home, Briefcase, Mail } from 'lucide-react';

const iconMap = {
    home: Home,
    briefcase: Briefcase,
    mail: Mail
};

const NavbarItem = ({ label, path, icon, isActive, isLogo }) => {
    const Icon = icon ? iconMap[icon] : null;
    
    // Check if this is a scroll section (paths starting with #)
    const isScrollSection = path.startsWith('#');
    
    if (isLogo) {
        return (
            <RouterLink
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
            </RouterLink>
        );
    }

    // Common classes for both types of links
    const linkClasses = `flex items-center px-3 py-2 text-sm font-medium rounded-lg transition-colors
        ${isActive 
            ? 'text-blue-600 bg-blue-50' 
            : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50'
        }
        ${icon ? 'space-x-2' : ''}`;

    // If it's a scroll section, use react-scroll Link
    if (isScrollSection) {
        return (
            <ScrollLink
                to={path.substring(1)} // Remove the # from the path
                spy={true}
                smooth={true}
                offset={-70} // Adjust this value based on your navbar height
                duration={500}
                className={`${linkClasses} cursor-pointer`}
                activeClass="text-blue-600 bg-blue-50"
            >
                {Icon && <Icon className="w-5 h-5" />}
                <span>{label}</span>
            </ScrollLink>
        );
    }

    // For regular routes, use react-router Link
    return (
        <RouterLink
            to={path}
            className={linkClasses}
        >
            {Icon && <Icon className="w-5 h-5" />}
            <span>{label}</span>
        </RouterLink>
    );
};

export default NavbarItem;