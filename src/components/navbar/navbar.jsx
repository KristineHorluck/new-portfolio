import React, { useState } from "react";
import { Menu, X, Home, Briefcase, Mail } from "lucide-react";
import { NAV_ITEMS } from "./constants";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [hoveredItem, setHoveredItem] = useState(null);

    const logoItem = NAV_ITEMS.find(item => item.isLogo);
    const navigationItems = NAV_ITEMS.filter(item => !item.isLogo);

    const iconMap = {
        home: Home,
        briefcase: Briefcase,
        mail: Mail
    };

    return (
        <nav className="fixed w-full top-0 z-50 h-16">
            {/* Glowing background effect with reduced opacity */}
            <div className="absolute inset-0 bg-white/60 backdrop-blur-sm"></div>
            
            <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-full">
                <div className="flex h-full justify-between items-center">
                    {/* Logo section */}
                    <div className="flex items-center">
                        <a href="/" className="group relative text-xl md:text-2xl font-medium text-[#284b63]">
                            <span className="relative inline-block">
                                {logoItem.label.split('').map((char, index) => (
                                    <span
                                        key={index}
                                        className="inline-block transition-all duration-300 hover:text-[#3c6e71] hover:-translate-y-1"
                                        style={{ transitionDelay: `${index * 50}ms` }}
                                    >
                                        {char}
                                    </span>
                                ))}
                            </span>
                            <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-[#3c6e71] to-[#284b63] 
                                         transform origin-left scale-x-0 transition-transform duration-300 
                                         group-hover:scale-x-100"></span>
                        </a>
                    </div>

                    {/* Desktop navigation */}
                    <div className="hidden md:flex md:items-center md:space-x-8">
                        {navigationItems.map((item) => {
                            const Icon = item.icon ? iconMap[item.icon] : null;
                            return (
                                <a
                                    key={item.path}
                                    href={item.path}
                                    className="group relative px-3 py-2 text-sm font-medium transition-all duration-300 text-[#284b63]"
                                    onMouseEnter={() => setHoveredItem(item.path)}
                                    onMouseLeave={() => setHoveredItem(null)}
                                >
                                    <div className="relative flex items-center space-x-2">
                                        {Icon && (
                                            <Icon 
                                                className={`w-5 h-5 transition-transform duration-300
                                                          ${hoveredItem === item.path ? 'scale-110 text-[#3c6e71]' : 'scale-100'}`}
                                            />
                                        )}
                                        <span>{item.label}</span>
                                    </div>
                                    
                                    {/* Animated background */}
                                    <span className={`absolute inset-0 bg-gradient-to-r from-[#3c6e71]/5 to-[#284b63]/5 
                                                    rounded-lg -z-10 transition-all duration-300 
                                                    ${hoveredItem === item.path ? 'opacity-100' : 'opacity-0'}`}></span>
                                    
                                    {/* Bottom border */}
                                    <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-[#3c6e71] to-[#284b63] 
                                                   transform origin-left scale-x-0 transition-transform duration-300 
                                                   group-hover:scale-x-100"></span>
                                </a>
                            );
                        })}
                    </div>

                    {/* Mobile menu button */}
                    <div className="flex items-center md:hidden">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="relative inline-flex items-center justify-center p-2 rounded-lg
                                     text-[#3c6e71] hover:bg-[#3c6e71]/10 hover:text-[#284b63] 
                                     transition-all duration-300 transform hover:scale-105"
                            aria-expanded={isOpen}
                        >
                            <span className="sr-only">Open main menu</span>
                            <div className="relative w-6 h-6">
                                <span className={`absolute inset-0 transition-opacity duration-300 
                                                ${isOpen ? 'opacity-0' : 'opacity-100'}`}>
                                    <Menu className="w-6 h-6" />
                                </span>
                                <span className={`absolute inset-0 transition-opacity duration-300 
                                                ${isOpen ? 'opacity-100' : 'opacity-0'}`}>
                                    <X className="w-6 h-6" />
                                </span>
                            </div>
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile menu */}
            <div 
                className={`md:hidden transition-all duration-300 ease-in-out transform 
                           ${isOpen ? 'translate-y-0 opacity-100' : '-translate-y-4 opacity-0 pointer-events-none'}`}
            >
                <div className="bg-white/90 backdrop-blur-md px-4 pt-2 pb-3 space-y-1 shadow-lg">
                    {navigationItems.map((item) => {
                        const Icon = item.icon ? iconMap[item.icon] : null;
                        return (
                            <a
                                key={item.path}
                                href={item.path}
                                className="flex items-center px-3 py-2 text-base font-medium rounded-lg
                                         text-[#284b63] hover:text-[#3c6e71] hover:bg-[#3c6e71]/10
                                         transition-all duration-300 transform hover:translate-x-2"
                            >
                                {Icon && <Icon className="w-5 h-5 mr-2" />}
                                <span>{item.label}</span>
                            </a>
                        );
                    })}
                </div>
            </div>
        </nav>
    );
};

export default Navbar;