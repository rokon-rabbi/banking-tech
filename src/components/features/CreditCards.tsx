'use client';

import { CREDIT_CARDS } from '@/constants';
import { getCardTransform } from '@/lib/utils';

const CreditCards: React.FC = () => {
    return (
        <div className="w-full max-w-4xl flex justify-center items-center overflow-visible">
            <div className="flex items-center justify-center space-x-[-20px] sm:space-x-[-40px] md:space-x-[-60px]">
                {CREDIT_CARDS.map((card) => (
                    <div
                        key={card.id}
                        className="relative flex-shrink-0"
                        style={getCardTransform(card.rotation)}
                    >
                        <div className="w-24 h-36 sm:w-32 sm:h-48 md:w-36 md:h-52 lg:w-40 lg:h-60 rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl bg-gradient-to-br from-purple-600 via-purple-700 to-indigo-800 opacity-50">


                            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-transparent" />


                            <div className="relative p-3 sm:p-4 md:p-6 h-full flex flex-col justify-between text-white">

                                <div className="text-xs sm:text-sm md:text-base font-mono tracking-wider opacity-90">
                                    {card.number}
                                </div>

                                <div className="space-y-1 sm:space-y-2">
                                    <div className="text-xs sm:text-sm opacity-80">
                                        CARDHOLDER NAME
                                    </div>
                                    <div className="text-sm sm:text-base md:text-lg font-semibold">
                                        {card.name}
                                    </div>
                                    {card.expiry && (
                                        <div className="text-xs sm:text-sm opacity-80">
                                            {card.expiry}
                                        </div>
                                    )}
                                </div>
                            </div>
                            <div className="absolute top-3 sm:top-4 md:top-6 left-3 sm:left-4 md:left-6 w-6 sm:w-8 md:w-10 h-4 sm:h-6 md:h-7 bg-yellow-400 rounded opacity-80" />
                            <div className="absolute top-3 sm:top-4 md:top-6 right-3 sm:right-4 md:right-6 w-8 sm:w-10 md:w-12 h-4 sm:h-6 md:h-8 bg-white/10 rounded opacity-60" />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default CreditCards;