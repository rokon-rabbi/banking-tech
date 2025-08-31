'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';
import { NAVIGATION_ITEMS } from '@/constants';

const Navigation: React.FC = () => {
    const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

    return (
        <nav className="hidden md:flex space-x-6 text-sm font-medium">
            {NAVIGATION_ITEMS.map((item) => {
                if (item.hasDropdown && item.items) {
                    return (
                        <div
                            key={item.label}
                            className="relative group"
                            onMouseEnter={() => setActiveDropdown(item.label)}
                            onMouseLeave={() => setActiveDropdown(null)}
                        >
                            <button className="flex items-center space-x-1 hover:text-white/80 transition-colors">
                                <span>{item.label}</span>
                                <ChevronDown className="w-3 h-3" />
                            </button>


                            <div className={cn(
                                'absolute top-full left-0 mt-2 w-48 bg-white rounded-lg shadow-lg py-2 z-50 transition-all duration-200',
                                activeDropdown === item.label
                                    ? 'opacity-100 visible translate-y-0'
                                    : 'opacity-0 invisible translate-y-2'
                            )}>
                                {item.items.map((subItem) => (
                                    <Link
                                        key={subItem.label}
                                        href={subItem.href || '#'}
                                        className="block px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-purple-600 transition-colors"
                                    >
                                        {subItem.label}
                                    </Link>
                                ))}
                            </div>
                        </div>
                    );
                }

                return (
                    <Link
                        key={item.label}
                        href={item.href || '#'}
                        className="hover:text-white/80 transition-colors"
                    >
                        {item.label}
                    </Link>
                );
            })}
        </nav>
    );
};

export default Navigation;