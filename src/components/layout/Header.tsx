'use client';

import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import Logo from '@/components/ui/Logo';
import Navigation from './Navigation';
import Button from '@/components/ui/Button';
import { NAVIGATION_ITEMS } from '@/constants';
import Link from 'next/link';

const Header: React.FC = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <>
            <header className="flex items-center justify-between px-4 sm:px-16 py-4 max-w-7xl mx-auto w-full relative z-50">
                <div className="flex gap-10 items-center">
                    <Logo />
                    <Navigation />
                </div>
                <div className="hidden md:flex items-center space-x-4 text-sm font-medium">
                    <Link href="/login" className="hover:text-white/80 transition-colors">
                        Log in
                    </Link>
                    <Button variant="primary" size="sm">
                        Sign up
                    </Button>
                </div>


                <button
                    className="md:hidden p-2 text-white"
                    onClick={toggleMobileMenu}
                    aria-label="Toggle mobile menu"
                >
                    {isMobileMenuOpen ? (
                        <X className="w-6 h-6" />
                    ) : (
                        <Menu className="w-6 h-6" />
                    )}
                </button>
            </header>

            {isMobileMenuOpen && (
                <div className="md:hidden fixed inset-0 z-40 bg-purple-600">
                    <div className="flex flex-col pt-20 px-6">
                        <nav className="flex flex-col space-y-6">
                            {NAVIGATION_ITEMS.map((item) => (
                                <div key={item.label}>
                                    {item.hasDropdown && item.items ? (
                                        <div className="space-y-3">
                                            <span className="text-lg font-medium text-white/80">
                                                {item.label}
                                            </span>
                                            <div className="ml-4 space-y-2">
                                                {item.items.map((subItem) => (
                                                    <Link
                                                        key={subItem.label}
                                                        href={subItem.href || '#'}
                                                        className="block text-white hover:text-white/80 transition-colors"
                                                        onClick={() => setIsMobileMenuOpen(false)}
                                                    >
                                                        {subItem.label}
                                                    </Link>
                                                ))}
                                            </div>
                                        </div>
                                    ) : (
                                        <Link
                                            href={item.href || '#'}
                                            className="block text-lg font-medium text-white hover:text-white/80 transition-colors"
                                            onClick={() => setIsMobileMenuOpen(false)}
                                        >
                                            {item.label}
                                        </Link>
                                    )}
                                </div>
                            ))}
                        </nav>

                        <div className="flex flex-col space-y-4 mt-8">
                            <Link
                                href="/login"
                                className="text-center py-3 text-white hover:text-white/80 transition-colors"
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                Log in
                            </Link>
                            <Button
                                variant="primary"
                                size="md"
                                className="w-full"
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                Sign up
                            </Button>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default Header;