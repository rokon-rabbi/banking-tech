'use client';

import { LogoProps } from '@/types';


const Logo: React.FC<LogoProps> = () => {



    return (
        <div className="flex items-center space-x-2">
            <img
                src="https://storage.googleapis.com/a1aa/image/29cfb2fb-8158-4dbd-15ad-2dacb9b8451e.jpg"
                alt="Logo"
                width={24}
                height={24}
                className="w-6 h-6 rounded-md"
            />
            <span className="font-semibold text-sm select-none">Untitled UI</span>
        </div>
    );
};

export default Logo;