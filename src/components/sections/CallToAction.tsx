'use client';

import Button from '@/components/ui/Button';
import Image from 'next/image';

const CallToAction: React.FC = () => {
    const image = "/images/prefessional.jpeg"
    return (
        <section className="bg-white py-12">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
                    <div className="flex flex-col md:flex-row">
                        <div className="bg-purple-600 text-white p-8 md:p-12 md:w-1/2 flex flex-col justify-center">

                            <h2 className="text-2xl md:text-3xl font-bold mb-4">
                                Give us a shot
                            </h2>
                            <p className="text-base md:text-lg mb-8 text-white/90">
                                Join over 4,000+ startups already growing with Untitled.
                            </p>

                            <div className="flex flex-col sm:flex-row gap-4">
                                <Button variant="secondary" size="md">
                                    Learn more
                                </Button>
                                <Button variant="primary" size="md">
                                    Get started
                                </Button>
                            </div>
                        </div>

                        <div className="md:w-1/2 relative min-h-[300px] md:min-h-[400px]">
                            <div className="absolute inset-0 bg-gradient-to-br from-purple-100 to-blue-100">
                                <div className="w-full h-full flex items-center justify-center text-gray-500">
                                    <Image src={image} alt={"professional"} width={500} height={500} />                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CallToAction;