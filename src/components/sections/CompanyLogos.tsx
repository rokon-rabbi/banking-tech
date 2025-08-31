'use client';

import { COMPANIES } from '@/constants';

import {
    Zap,
    Lightbulb,
    Feather,
    Circle,
    Building2,
    Brain
} from "lucide-react";

interface CompanyIcons {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    [key: string]: React.ComponentType<any>;
}

const COMPANY_ICONS: CompanyIcons = {
    boltshift: Zap,
    lightbox: Lightbulb,
    featherdev: Feather,
    spherule: Circle,
    globalbank: Building2,
    nietzsche: Brain,
};
const CompanyLogos: React.FC = () => {
    return (
        <section className="bg-white py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center text-xs text-gray-500 mb-8">
                    Join 4,900+ companies already growing
                </div>

                <div className="flex flex-wrap justify-center items-center gap-6 md:gap-8 lg:gap-12">
                    {COMPANIES.map((company) => {
                        const IconComponent = COMPANY_ICONS[company?.id];
                        return (
                            <div
                                key={company.id}
                                className="flex items-center space-x-2 opacity-100 hover:opacity-100 transition-opacity duration-200"
                            >
                                <div className="w-10 h-10 flex items-center justify-center rounded-full bg-gradient-to-r from-blue-500 to-purple-600">
                                    <IconComponent className="w-3.5 h-3.5 text-white" />
                                </div>
                                <span className="font-semibold text-gray-900 text-sm whitespace-nowrap">
                                    {company.name}
                                </span>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default CompanyLogos;