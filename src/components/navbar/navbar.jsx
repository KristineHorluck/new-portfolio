import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import NavbarItem from "./navbarItem";
import { NAV_ITEMS } from "./constants";
import { Menu, X } from "lucide-react";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation();

    useEffect(() => {
        setIsOpen(false);
    }, [location]);

    const logoItem = NAV_ITEMS.find(item => item.isLogo);
    const navigationItems = NAV_ITEMS.filter(item => !item.isLogo);

    return (
        <div className="w-full bg-white shadow">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="flex h-16 justify-between">
                    {/* Logo section */}
                    <div className="flex items-center">
                        {logoItem && (
                            <NavbarItem
                                {...logoItem}
                                isActive={location.pathname === logoItem.path}
                            />
                        )}
                    </div>

                    {/* Desktop navigation */}
                    <div className="hidden md:flex md:items-center md:space-x-8">
                        {navigationItems.map((item) => (
                            <NavbarItem
                                key={item.path}
                                {...item}
                                isActive={location.pathname === item.path}
                            />
                        ))}
                    </div>

                    {/* Mobile menu button */}
                    <div className="flex items-center md:hidden">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="inline-flex items-center justify-center rounded-md p-2 text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                            aria-expanded={isOpen}
                        >
                            <span className="sr-only">Open main menu</span>
                            {isOpen ? (
                                <X className="block h-6 w-6" />
                            ) : (
                                <Menu className="block h-6 w-6" />
                            )}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile menu */}
            {isOpen && (
                <div className="md:hidden">
                    <div className="space-y-1 px-4 pb-3 pt-2">
                        {navigationItems.map((item) => (
                            <div key={item.path} className="block w-full">
                                <NavbarItem
                                    {...item}
                                    isActive={location.pathname === item.path}
                                />
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
};

export default Navbar;