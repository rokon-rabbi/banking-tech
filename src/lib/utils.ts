import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';


export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}


export function formatCardNumber(cardNumber: string): string {
    return cardNumber.replace(/(.{4})/g, '$1 ').trim();
}


export function getCardTransform(rotation: number): React.CSSProperties {
    return {
        transform: `rotate(${rotation}deg)`,
    };
}