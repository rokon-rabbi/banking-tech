'use client';

import { Play } from 'lucide-react';
import Button from '@/components/ui/Button';
import CreditCards from '@/components/features/CreditCards';
import { BRAND } from '@/constants';

const HeroSection: React.FC = () => {
    return (
        <section className="flex-grow flex flex-col items-center text-center px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto py-6 sm:py-8 md:py-12 lg:py-16">
            <p className="text-xs sm:text-sm lg:text-base text-white/70 mb-3 sm:mb-4 select-none">
                {BRAND.tagline}
            </p>

            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-semibold leading-tight sm:leading-tight md:leading-tight max-w-xs sm:max-w-lg md:max-w-2xl lg:max-w-3xl xl:max-w-4xl mb-4 sm:mb-6">
                Banking technology
                <br className="hidden sm:block" />
                <span className="sm:hidden"> </span>
                that{' '}
                <span className="relative inline-block">
                    has your
                </span>{' '}
                back.
            </h1>

            <p className="text-sm sm:text-base lg:text-lg text-white/70 mb-6 sm:mb-8 max-w-xs sm:max-w-md md:max-w-lg lg:max-w-xl px-2 sm:px-0">
                Simple, transparent banking. No hidden fees and free overdrafts.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-8 sm:mb-12 md:mb-16 w-full max-w-xs sm:max-w-none sm:justify-center">
                <Button
                    variant="secondary"
                    size="md"
                    className="flex items-center justify-center space-x-2 w-full sm:w-auto min-w-0 sm:min-w-[120px]"
                >
                    <Play className="w-4 h-4 flex-shrink-0" />
                    <span>Demo</span>
                </Button>
                <Button
                    variant="primary"
                    size="md"
                    className="w-full sm:w-auto min-w-0 sm:min-w-[120px]"
                >
                    Sign up
                </Button>
            </div>

            <div className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl">
                <CreditCards />
            </div>
        </section>
    );
};

export default HeroSection;