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
    
    const isScrollSection = path.startsWith('#');
    
    if (isLogo) {
        const words = label.split(' ');
        return (
            <RouterLink
                to={path}
                className="group relative text-xl md:text-2xl font-medium text-[#284b63] transition-colors duration-300"
            >
                <span className="relative inline-block transition-transform duration-300 group-hover:-translate-y-1">
                    {words.map((word, wordIndex) => (
                        <React.Fragment key={wordIndex}>
                            {wordIndex > 0 && (
                                <span 
                                    className="inline-block transition-transform duration-300 hover:text-[#3c6e71]"
                                    style={{
                                        transitionDelay: `${wordIndex * words[wordIndex-1].length * 30}ms`,
                                    }}
                                >
                                    {" "}
                                </span>
                            )}
                            {word.split('').map((char, charIndex) => (
                                <span
                                    key={`${wordIndex}-${charIndex}`}
                                    className="inline-block transition-transform duration-300 hover:text-[#3c6e71]"
                                    style={{
                                        transitionDelay: `${(wordIndex * word.length + charIndex) * 30}ms`,
                                        transform: 'translateY(0)',
                                    }}
                                >
                                    {char}
                                </span>
                            ))}
                        </React.Fragment>
                    ))}
                </span>
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-[#3c6e71] to-[#284b63] transform origin-left scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>
            </RouterLink>
        );
    }

    const linkClasses = `flex items-center px-3 py-2 text-sm font-medium rounded-lg transition-colors duration-300
        ${isActive 
            ? 'text-[#3c6e71] bg-[#3c6e71]/10' 
            : 'text-[#284b63] hover:text-[#3c6e71] hover:bg-[#3c6e71]/10'
        }
        ${icon ? 'space-x-2' : ''}`;

    if (isScrollSection) {
        return (
            <ScrollLink
                to={path.substring(1)}
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                className={`${linkClasses} cursor-pointer`}
                activeClass="text-[#3c6e71] bg-[#3c6e71]/10"
            >
                {Icon && <Icon className="w-5 h-5" />}
                <span>{label}</span>
            </ScrollLink>
        );
    }

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